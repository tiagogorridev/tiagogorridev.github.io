interface AvatarProps {
  alt: string
  className?: string
}

/**
 * Foto/avatar de Tiago (WebP otimizado gerado a partir de
 * public/avatar.png). É o candidato a LCP do hero, por isso
 * carrega com prioridade alta.
 */
export function Avatar({ alt, className = '' }: AvatarProps) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}avatar.webp`}
      alt={alt}
      width={400}
      height={400}
      fetchPriority="high"
      decoding="async"
      draggable={false}
      className={`select-none object-cover object-center ${className}`.trim()}
    />
  )
}
