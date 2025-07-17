import {
  Description,
  Hero,
  PreferencesToPerfomance,
  Slider,
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
      <Slider />
      <PreferencesToPerfomance />
      <WhatIncluded />
      <WeWantToSee />
    </main>
  );
}
