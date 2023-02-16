import React, { useState, useEffect, useRef } from 'react';
import { TextureLoader } from 'three';

export const Earth = () => {
    const texture = new TextureLoader().load('03-earth/01-earth.jpg');
    const myEarthMesh = useRef<any>(null);

    useEffect(() => {
        const animate = () => {
            if (myEarthMesh.current) {
                myEarthMesh.current.rotation.y += 0.001;
            }
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <>
            <mesh ref={myEarthMesh}>
              <sphereGeometry />
              <meshStandardMaterial map={texture} />
            </mesh>
        </>
    )
};
