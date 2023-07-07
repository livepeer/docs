import { Button } from '@livepeer/design-system';
import { Broadcast } from '@livepeer/react';
import { useState } from 'react';

export const SimpleBroadcast = () => {
  const [isLive, setIsLive] = useState(false);
  return (
    <>
      <Button
        css={{ mb: '$2' }}
        size="3"
        variant="green"
        onClick={() => setIsLive(true)}
      >
        Try broadcasting
      </Button>
      {isLive && (
        <>
          <Broadcast
            title="Docs Public Stream"
            streamKey="b94d-puzf-mfxq-9ivq"
          />
          <a
            href="https://lvpr.tv?v=b94desulht78pzo0&lowLatency=true"
            target="_blank"
          >
            <Button css={{ mt: '$2' }} size="3" variant="green">
              View stream in lvpr.tv ↗
            </Button>
          </a>
        </>
      )}
    </>
  );
};
