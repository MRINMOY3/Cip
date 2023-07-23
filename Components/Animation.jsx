import * as THREE from 'three';
import React,{useState} from 'react'
import './Animation.css'



function  Animation() {
    const scene = new THREE.Scene();

    const geo = new THREE.SphereGeometry(3, 64, 64);
    const mat = new THREE.MeshStandardMaterial({
        color: '#00ff83',

    })

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh)

//Lights
const light=new THREE.PointLight(0xffffff,1,1)
light.position.set(0,10,10)
scene.add(light)


//Camera addition
    const cam = new THREE.PerspectiveCamera(45, 800/600)
    cam.position.z=20
    scene.add(cam)

    //Renderer
    const canvas =document.querySelector('.webgl')
    const renderer = new THREE.WebGLRenderer({canvas})


    renderer.setSize(10,10)
    renderer.render(scene,cam)

    return(
        <div>
            <canvas class="webgl"></canvas>
    </div>)

}
export default Animation





