import * as THREE from "three"

const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
scene.add(camera)

const renderer = new THREE.WebGLRenderer
