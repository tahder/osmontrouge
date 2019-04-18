import { config, taxonomy } from './data.yml';
import imageSidebar from './images/montrouge.png';

export const mapMaxBounds = config.map.maxBounds;
export const mapCenter = config.map.center;
export const mapZoom = config.map.zoom;
export const mapName = config.name;
export const mapStyles = config.map.styles;

export const mapillaryUsers = [
  'e_ZBE6mFd7CYNjRSpLl-Lg', // francois2
  'C4ENdWpJdFNf8CvnQd7NrQ', // phyks
  'XtzGKZX2_VIJRoiJ8IWRNQ'  // overflorian
];
export const mapillaryClientId = 'ZV9aQkU2bUZkN0NZTmpSU3BMbC1MZzo0YmYyNDRkMDFkYWE3YWQ3';

Object.keys(taxonomy).forEach((key) => {
  Object.keys(taxonomy[key].features).forEach((keyFeature) => {
    taxonomy[key].features[keyFeature].selected = false;
  });
});

export { taxonomy, imageSidebar };
