import { Canvas } from '@react-three/fiber'
import {HomeScene} from '@/scenes'
import {EnvMap} from '@/scenes'

export const App = () => {

  return (
    <>
      <main className="App">
        <section className="hero">
          <h1>Planet Earth</h1>
          <h3>Por DK</h3>
        </section>
      </main>
      <Canvas className='canvas'
        shadows
        camera={{position:[0,6,6],fov:15}}
      >
      <HomeScene />
      <EnvMap />
      </Canvas>
    </>
  )
}