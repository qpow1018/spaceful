'use client';

import { useEffect, useState } from 'react';

import styles from './icon.module.scss';

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, size = 24, color, className, style }: IconProps) {
  const [IconComponent, setIconComponent] = useState<React.ComponentType<{
    color: string | undefined;
    size?: number | string;
  }> | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await import(`./svg/${name}`);
        setIconComponent(() => iconModule.default);
      } catch (error) {
        console.error(`Failed to load icon: ${name}`);
      }
    };

    loadIcon();
  }, [name, size]);

  return (
    <i
      className={`${styles['new-icon-component']} ${className}`}
      style={{ width: size, height: size, color, ...style }}
    >
      {IconComponent ? <IconComponent color={color} size={size} /> : null}
    </i>
  );
}
