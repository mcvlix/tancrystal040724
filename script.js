import * as THREE from 'three'
import gsap from 'gsap'
console.log(THREE)

// Canvas
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
// Scene
const scene = new THREE.Scene()
// Sizes
const sizes = {
    width: 750,
    height: 500,
}

// Object
const geometry = new THREE.OctahedronGeometry(1,0,0)
const white = new THREE.MeshBasicMaterial({color: 0xFFFFFF})
const color2 = new THREE.MeshBasicMaterial({color: 0x00FFB4})
const mesh1 = new THREE.Mesh(geometry,color2)

const gems1 = new THREE.Group()
gems1.add(mesh1)
const mesh2 = mesh1.clone()
gems1.add(mesh2)
const mesh3 = mesh1.clone()
gems1.add(mesh3)
const mesh4 = mesh1.clone()
gems1.add(mesh4)
const mesh5 = mesh1.clone()
gems1.add(mesh5)
const mesh6 = mesh1.clone()
gems1.add(mesh6)
const mesh7 = mesh1.clone()
gems1.add(mesh7)
const mesh8 = mesh1.clone()
gems1.add(mesh8)
const mesh9 = mesh1.clone()
gems1.add(mesh9)
const mesh10 = mesh1.clone()
gems1.add(mesh10)
const mesh11 = mesh1.clone()
gems1.add(mesh11)
const mesh12 = mesh1.clone()
gems1.add(mesh12)
const mesh13 = mesh1.clone()
gems1.add(mesh13)
const mesh14 = mesh1.clone()
gems1.add(mesh14)
const mesh15 = mesh1.clone()
gems1.add(mesh15)
const mesh16 = mesh1.clone()
gems1.add(mesh16)
const mesh17 = new THREE.Mesh(geometry,white)
gems1.add(mesh17)

scene.add(gems1)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,10)
scene.add(camera)
camera.lookAt(0,0,0)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



const clock = new THREE.Clock()
//gsap.to(cubes.position, {duration: 1, delay: 1, x: 2})
//gsap.to(cubes.position, {duration: 1, delay: 2, x: 0})

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // cubes.position.x = 2 * Math.tan(elapsedTime)
    mesh1.position.y = Math.tan(elapsedTime) * 4
    mesh1.position.x = 4 * Math.tan(elapsedTime)
    mesh1.position.z = 4 * Math.tan(elapsedTime)

    mesh2.position.y = Math.tan(elapsedTime) * 4
    mesh2.position.x = - 4 * Math.tan(elapsedTime)
    mesh2.position.z = 4 * Math.tan(elapsedTime)

    mesh3.position.y = Math.tan(elapsedTime) * 4
    mesh3.position.x = 4 * Math.tan(elapsedTime)
    mesh3.position.z = - 4 * Math.tan(elapsedTime)

    mesh4.position.y = Math.tan(elapsedTime) * 4
    mesh4.position.x = - 4 * Math.tan(elapsedTime)
    mesh4.position.z = - 4 * Math.tan(elapsedTime)

    mesh5.position.y = Math.tan(elapsedTime) * 8
    mesh5.position.x = 4 * Math.tan(elapsedTime)
    mesh5.position.z = 0

    mesh6.position.y = Math.tan(elapsedTime) * 8
    mesh6.position.x = - 4 * Math.tan(elapsedTime)
    mesh6.position.z = 0

    mesh7.position.y = Math.tan(elapsedTime) * 8
    mesh7.position.x = 0
    mesh7.position.z = 4 * Math.tan(elapsedTime)

    mesh8.position.y = - Math.tan(elapsedTime) * 8
    mesh8.position.x = 0
    mesh8.position.z = - 4 * Math.tan(elapsedTime)

    mesh9.position.y = - Math.tan(elapsedTime) * 4
    mesh9.position.x = 4 * Math.tan(elapsedTime)
    mesh9.position.z = 4 * Math.tan(elapsedTime)

    mesh10.position.y = - Math.tan(elapsedTime) * 4
    mesh10.position.x = - 4 * Math.tan(elapsedTime)
    mesh10.position.z = 4 * Math.tan(elapsedTime)

    mesh11.position.y = - Math.tan(elapsedTime) * 4
    mesh11.position.x = 4 * Math.tan(elapsedTime)
    mesh11.position.z = - 4 * Math.tan(elapsedTime)

    mesh12.position.y = - Math.tan(elapsedTime) * 4
    mesh12.position.x = - 4 * Math.tan(elapsedTime)
    mesh12.position.z = - 4 * Math.tan(elapsedTime)

    mesh13.position.y = - Math.tan(elapsedTime) * 8
    mesh13.position.x = 4 * Math.tan(elapsedTime)
    mesh13.position.z = 0

    mesh14.position.y = - Math.tan(elapsedTime) * 8
    mesh14.position.x = - 4 * Math.tan(elapsedTime)
    mesh14.position.z = 0

    mesh15.position.y = - Math.tan(elapsedTime) * 8
    mesh15.position.x = 0
    mesh15.position.z = 4 * Math.tan(elapsedTime)

    mesh16.position.y = - Math.tan(elapsedTime) * 8
    mesh16.position.x = 0
    mesh16.position.z = - 4 * Math.tan(elapsedTime)

    mesh17.position.y = 0 * Math.tan(elapsedTime) * 2
    mesh17.position.x = 0
    mesh17.position.z = 0

    mesh1.rotation.y = Math.tan(elapsedTime)
    mesh2.rotation.y = Math.tan(elapsedTime)
    mesh3.rotation.y = Math.tan(elapsedTime)
    mesh4.rotation.y = Math.tan(elapsedTime)
    mesh5.rotation.y = Math.tan(elapsedTime) 
    mesh6.rotation.y = Math.tan(elapsedTime) 
    mesh7.rotation.y = Math.tan(elapsedTime) 
    mesh8.rotation.y = Math.tan(elapsedTime) 

    gems1.scale.set(1, 1.75, 1)
    gems1.rotation.y = Math.abs(Math.tan(elapsedTime))
    camera.position.set(0, 10 * Math.tan(elapsedTime),35)
    camera.rotation.z = elapsedTime * 2

    camera.lookAt(mesh17.position)
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick ()