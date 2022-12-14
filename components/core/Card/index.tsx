import { Box } from '@livepeer/design-system';
import Link from 'next/link';

function Card({ title, description, icon, href }: any) {
  return (
    <Link href={href}>
      <Box
        css={{
          display: 'flex',
          minWidth: '150px',
          px: '$4',
          flexDirection: 'column',
          pt: '$4',
          pb: '$3',
          cursor: 'pointer',
          borderRadius: '10px',
          border: '1px solid $neutral4',
          boxShadow: '0px 6px 10px rgb(0 0 0 / 5%)',
          backgroundColor: '$neutral2',
          backdropFilter: 'blur(10px)',
          height: '100%',
        }}
      >
        <Box css={{ fontSize: '$7', mb: '$1' }}>{icon}</Box>
        <Box>
          <h3>{title}</h3>
          <p>{description}</p>
        </Box>
      </Box>
    </Link>
  );
}

export function Cards({ children, num, ...props }: any) {
  return (
    <Box
      css={{
        mt: 4,
        gap: '16px',
        display: 'grid',
        '--rows': num || 3,
        gridTemplateColumns:
          'repeat(auto-fill, minmax(max(250px, calc((100% - 1rem * 2) / var(--rows))), 1fr))',
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Card;
