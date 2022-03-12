import { Formik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import "./Contacto.scss"

const Contacto = () => (
    <div className='contactoContainer'>
        <h1 className='titulo'>Contacto</h1>
        <Formik 
            initialValues={{nombre: "", correo: "", texto: ""}}
            validate ={values => {
                const errors = {};
                if (values.nombre === "") {
                    errors.nombre = 'Requerido';
                }
                if (values.correo === "") {
                    errors.correo = 'Requerido';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
                  ) {
                    errors.correo = 'Dirección de correo electrónico incorrecta';
                  }
                  if (values.texto === "") {
                    errors.texto = 'Requerido';
                }
                  return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(()=> {
                    console.log(JSON.stringify(values, null , 2));
                    setSubmitting(false);
                    Swal.fire(
                        'Listo!',
                        'Datos enviados',
                        'success'
                      )
                }, 500);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className='form' onSubmit={handleSubmit}>
                    <span>Nombre:</span>
                    <input
                        type='text'
                        name='nombre'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nombre}   
                    />
                    {errors.nombre && touched.nombre && errors.nombre}
                    <span>Correo:</span>
                    <input
                        type="email"
                        name="correo"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.correo}
                    />
                    {errors.correo && touched.correo && errors.correo}
                    <span>Mensaje:</span>
                    <textarea
                        name="texto"
                        cols="20" 
                        rows="6"
                        placeholder='Consulta, queja, petición, etc'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.texto}
                    />
                    {errors.texto && touched.texto && errors.texto}
                    <button type="submit" disabled = {isSubmitting}>
                        Enviar
                    </button>
                </form>
            )}

        </Formik>

    </div>
);

export default Contacto;
