<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Productos de Belleza</title>

    <link rel="stylesheet" href="catalogo.css">
</head>
<body>
    <header>
        <h1>Catálogo de Belleza</h1>
        <input type="text" id="search" placeholder="Buscar producto..." onkeyup="filterProducts()">
        <img src="Imagen de WhatsApp 2024-12-02 a las 15.57.10_db43dac0.jpg" alt="Logo" class="imgRedonda">
    </header>

    <div class="catalogo">
        <div class="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 1">
            <h2>Crema Hidratante</h2>
            <p>Hidrata y suaviza la piel</p>
            <span>$25.99</span>
        </div>
        <div class="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 2">
            <h2>Serum Antiarrugas</h2>
            <p>Reduce las arrugas y líneas de expresión</p>
            <span>$45.50</span>
        </div>
        <div class="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 3">
            <h2>Shampoo Nutritivo</h2>
            <p>Fortalece el cabello desde la raíz</p>
            <span>$18.75</span>
        </div>
        <div class="producto">
            <img src="https://via.placeholder.com/150" alt="Producto 4">
            <h2>Mascarilla Facial</h2>
            <p>Revitaliza y rejuvenece la piel</p>
            <span>$30.00</span>
        </div>
    </div>

    <script src="catalogo.js"></script>
</body>
</html>
