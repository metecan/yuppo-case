'use client';

import { useEffect, useState } from 'react';
import { useDocumentStore } from 'src/stores/document.store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    useDocumentStore.persist.rehydrate();
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return <>{children}</>;

  return <>{children}</>;
};
