
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/testdoc/',
  component: ComponentCreator('/testdoc/'),
  exact: true,
  
},
{
  path: '/testdoc/Main',
  component: ComponentCreator('/testdoc/Main'),
  exact: true,
  
},
{
  path: '/testdoc/docs/:route',
  component: ComponentCreator('/testdoc/docs/:route'),
  
  routes: [
{
  path: '/testdoc/docs/api/global.Types',
  component: ComponentCreator('/testdoc/docs/api/global.Types'),
  exact: true,
  
},
{
  path: '/testdoc/docs/api/particle.GravityParticle',
  component: ComponentCreator('/testdoc/docs/api/particle.GravityParticle'),
  exact: true,
  
},
{
  path: '/testdoc/docs/api/particle.GravityParticleSystem',
  component: ComponentCreator('/testdoc/docs/api/particle.GravityParticleSystem'),
  exact: true,
  
},
{
  path: '/testdoc/docs/api/particle.Particle',
  component: ComponentCreator('/testdoc/docs/api/particle.Particle'),
  exact: true,
  
},
{
  path: '/testdoc/docs/api/particle.ParticleSystem',
  component: ComponentCreator('/testdoc/docs/api/particle.ParticleSystem'),
  exact: true,
  
},
{
  path: '/testdoc/docs/manual/manual',
  component: ComponentCreator('/testdoc/docs/manual/manual'),
  exact: true,
  
},
{
  path: '/testdoc/docs/particle/GravityParticleSystem',
  component: ComponentCreator('/testdoc/docs/particle/GravityParticleSystem'),
  exact: true,
  
},
{
  path: '/testdoc/docs/particle/ParticleExtensions',
  component: ComponentCreator('/testdoc/docs/particle/ParticleExtensions'),
  exact: true,
  
},
{
  path: '/testdoc/docs/particle/ParticleSystem',
  component: ComponentCreator('/testdoc/docs/particle/ParticleSystem'),
  exact: true,
  
},
{
  path: '/testdoc/docs/particle/introduction',
  component: ComponentCreator('/testdoc/docs/particle/introduction'),
  exact: true,
  
},
{
  path: '/testdoc/docs/particle/useParticle',
  component: ComponentCreator('/testdoc/docs/particle/useParticle'),
  exact: true,
  
},
{
  path: '/testdoc/docs/update/update1.2.2',
  component: ComponentCreator('/testdoc/docs/update/update1.2.2'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
