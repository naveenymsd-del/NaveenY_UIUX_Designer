import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: 'Profile',
    title: 'Naveen Y',
    subtitle: 'UI/UX Designer | Product Thinker',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -3, -4),
    year: 'Bio',
    title: 'Who Am I?',
    subtitle: "I believe design is the invisible force that shapes how people experience the world.",
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -8),
    year: 'Philosophy',
    title: 'My Philosophy',
    subtitle: "People don't remember interfaces. They remember experiences. A functional interface without emotion is forgettable.",
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -12),
    year: 'Expertise',
    title: 'Expertise',
    subtitle: 'Web Apps, Enterprise Dashboards, SaaS Platforms, Mobile Apps, Design Systems, Motion Design.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(3, 1, -16),
    year: 'Process',
    title: 'Design Process',
    subtitle: 'Discover → Research → Define → Ideate → Design → Prototype → Deliver',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, 3, -20),
    year: 'Tools',
    title: 'Tools I Use',
    subtitle: 'Figma, HTML/CSS, React, Three.js, Antigravity, Framer, AI Tools.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-2, 1, -24),
    year: 'Vision',
    title: 'Current Vision',
    subtitle: 'Building immersive experiences combining storytelling, interaction, motion, and 3D environments.',
    position: 'left',
  }
]