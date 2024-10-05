```html

<cuenta-atras></cuenta-atras>

```

1. Modificar el selector
2. Componente que empieza desde diez la cuenta atrás hasta cero cuando pulso un botón
    - Crear una propiedad en la que almacene el valor a mostrar
    - Mostrar el valor de la prop en el HTML
    - Colocar el botón y capturar su evento click
    - Cuando capturemos el click comenzamos la cuenta atrás
    - Colocar el componente dentro del componente principal

# ProfileCard

```html
<profile-card name="Mario" surname="Girón" email="mario@gmail.com" [age]="32"></profile-card>
```

# ProductCard

```html
<!-- { name, price, stock, department } -->
<product-card 
    [product]="{ name: '', price: 9, stock: 123, department: 'oficina' }">
</product-card>
```

# Sumar

```html
<suma [num1]="3" [num2]="5"></suma>
<suma [num1]="4" [num2]="87"></suma>
```

1. Crear el componente
2. Modificar el selector
3. Creación de los @Input dentro del componente
4. Incluimos el componente sumar en AppComponent
5. Dentro del componente Sumar, mostrar los dos números y un botón para realizar la suma
6. Cuando pulse el botón sumar, debe aparecer el resultado de la suma

# OUTPUT

- Avisar al componente padre de cuenta-atras cuándo se ha terminado la cuenta
    - Padre: AppComponent

- Avisar al componente padre de suma con el resultado de la misma