import { type Component } from 'solid-js';
import type { AppConfig } from '../lib/config';

interface Props {
  config: AppConfig;
}

export const Background: Component<Props> = (props) => (
  <div class="fixed inset-0 z-0 bg-cover bg-center transition-all duration-1000"
       style={{ 'background-image': `url(${props.config.background.image})` }}>
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" />
  </div>
);
