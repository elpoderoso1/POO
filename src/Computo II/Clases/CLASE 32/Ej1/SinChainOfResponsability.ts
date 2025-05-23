function validationData(data: any): string {
    if (!data.username)
        return 'El nombre del usuario no puede estar vacio';

    if (!data.email)
        return 'El email no puede estar vacio';

    if (!data.password)
        return 'La contraseña no puede estar vacia';

    if (data.password.length < 8)
        return 'La contraseña no puede tener menos de 8 caracteres';

    return 'Datos validos';
}

console.log(validationData({ username: "", email: "", password: "" }));