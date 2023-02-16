import { useEnvironment, Environment, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

export const EnvMap = () => {
    const envMap = useEnvironment({files:'/spacefull1.hdr'})
    return(
        <>
            <Environment map={envMap} background/>
            
        </>
    )
}