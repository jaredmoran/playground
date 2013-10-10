var workshop = function(){
  var element,
    renderer,
    camera,
    scene,
    ambient,
    point,
    aspectRatio,
    windowHalf,
    mouse,
    fog,
    time = 0;

  var init = function(){
    element = document.getElementById('scene');
    scene = new THREE.Scene();
    ambient = new THREE.AmbientLight(0x040404);

    scene.add(ambient);

    point = new THREE.PointLight();
    point.position.set(100,100,100);
    scene.add(point);

    // point2 = new THREE.PointLight(0xffcc00,1,100);
    // point2.position.set(-10000,10000,10000);
    // scene.add(point2);

    // point3 = new THREE.PointLight(0x009933,1,100);
    // point3.position.set(10000,10000,-10000);
    // scene.add(point3);

    // point3 = new THREE.PointLight(0x000099,1,100);
    // point3.position.set(-10000,10000,-10000);
    // scene.add(point3);

    material = new THREE.MeshPhongMaterial({
      color: 0x1db7cb
    });

    // material = new THREE.MeshPhongMaterial({
    //   color: 0x000000
    // });

    sphere = new THREE.Mesh(
      new THREE.SphereGeometry(3, 20, 20),
        material
    );
    sphere.position.set(0,0,0);
    scene.add(sphere);

    circle = new THREE.Mesh(
      new THREE.CircleGeometry(20)
    );
    circle.position.set(10,2,10);
    scene.add(circle);

    cube = new THREE.Mesh(
        new THREE.CubeGeometry(5,5,3,10,10,10));
    cube.position.set(-10,2,10);
    scene.add(cube);

    plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100,100,100,100));
    plane.position.set(0,0,0);
    scene.add(plane);

    // text = new THREE.Mesh(
    //     new THREE.TextGeometry('jared'));
    // text.position.set(-5,-15,20);
    // scene.add(text);

    // fog = new THREE.Fog(0xcccccc, 1, 1000);
    // scene.add(fog);

    mouse = new THREE.Vector2(0,0);
    windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    aspectRatio = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    camera.position.z = 20;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer();
    //renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    element.appendChild(renderer.domElement);

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onResize, false);
  }

  var onResize = function(){
    windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    aspectRatio = window.innerWidth / window.innerHeight;
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  var onMouseMove = function(e){
    mouse.x = (e.clientX - windowHalf.x) / 2;
    mouse.y = (e.clientY - windowHalf.y) / 2;
  }

  var animate = function(){
    requestAnimationFrame(animate);
    render();
  }

  var render = function(){
    //sphere.position.x += 0.001;
    //camera.position.y += 0.01;
    //camera.position.z += 0.01;
    // sphere.position.x = mouse.x * 0.01;
    // sphere.position.y = mouse.y * 0.01;

    camera.position.x = 100 * Math.sin(time * Math.PI / 180);
    camera.position.z = 100 * Math.cos(time * Math.PI / 180);
    camera.lookAt(scene.position);

    //sphere.rotation.x += 0.02;
    //sphere.rotation.y += 0.02;


    time++;
    renderer.render(scene, camera);
  }

  window.onload = function(){
    init();
    animate();
  }
}();
