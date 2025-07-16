import {
  Description,
  Hero,
  PreferencesToPerfomance,
  WeAreReady,
  WeWantToSee,
  WhatIncluded,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <WeAreReady />
      <PreferencesToPerfomance />
      <WhatIncluded />
      <WeWantToSee />
    </main>
  );
}
