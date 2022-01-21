import React from 'react'
import Particles from 'react-tsparticles'
import particleConfig from './particleConfig'

const ParticleContainer = () => {
    return (
        <Particles params={particleConfig}></Particles>
    )
}

export default ParticleContainer