<script>
    SphereGeometry(radius,widthSegments,heightSegments);//函数(球体半径、球面精度)
        // 创建一个球体几何对象
        var box = new THREE.SphereGeometry(60,40,40);
        // 长方体 长 宽 高
        var geometry = new THREE.BoxGeometry(100,200,100);
        // 圆柱 底面直径 高度
        var geometry = new THREE.CylinderGeometry(50,50,100,25);
        // 正八面体
        var geometry = new THREE.OctahedronGeometry(50);
        // 正十二面体
        var geometry = new THREE.DodecachedronGeometry(50);
</script>
