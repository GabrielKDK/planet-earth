import {useEnvironment, Environment, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { Earth } from './03-earth'
import { EnvMap } from './EnvMap'

export const HomeScene = ()=>{
    return(
        <>
            <OrbitControls/>
            <ambientLight />
            
            <Stars  radius={100} depth={50} count={7658} factor={20} saturation={0} fade speed={1} />
            <EnvMap/>
            <Earth/>
        </>

    )
}