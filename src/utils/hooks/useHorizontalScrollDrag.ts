"use client";

import { useRef, useCallback, useEffect } from "react";

const DRAG_THRESHOLD_PX = 5;

/**
 * 가로 스크롤 컨테이너에 마우스 드래그 스크롤 지원.
 * 모바일은 native touch scroll 사용, PC는 마우스 드래그로 스크롤.
 * @returns scrollRef, eventHandlers, getWasDraggingAndReset (클릭 vs 드래그 구분용)
 */
export function useHorizontalScrollDrag() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const wasDraggingRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handlePointerDown = useCallback((event: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    startXRef.current = event.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  }, []);

  const handlePointerMove = useCallback((event: React.MouseEvent) => {
    if (!isPointerDownRef.current || !scrollRef.current) return;
    const deltaX = startXRef.current - event.clientX;

    if (!isDraggingRef.current && Math.abs(deltaX) > DRAG_THRESHOLD_PX) {
      isDraggingRef.current = true;
    }

    if (isDraggingRef.current) {
      event.preventDefault();
      scrollRef.current.scrollLeft = scrollLeftRef.current + deltaX;
      scrollLeftRef.current = scrollRef.current.scrollLeft;
      startXRef.current = event.clientX;
    }
  }, []);

  const handlePointerUp = useCallback(() => {
    if (isDraggingRef.current) {
      wasDraggingRef.current = true;
    }
    isPointerDownRef.current = false;
    isDraggingRef.current = false;
  }, []);

  const getWasDraggingAndReset = useCallback(() => {
    const wasDragging = wasDraggingRef.current;
    wasDraggingRef.current = false;
    return wasDragging;
  }, []);

  useEffect(() => {
    const handleMouseUp = () => {
      if (isPointerDownRef.current) handlePointerUp();
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handlePointerUp]);

  return {
    scrollRef,
    eventHandlers: {
      onMouseDown: handlePointerDown,
      onMouseMove: handlePointerMove,
      onMouseUp: handlePointerUp,
      onMouseLeave: handlePointerUp,
    },
    getWasDraggingAndReset,
  };
}
