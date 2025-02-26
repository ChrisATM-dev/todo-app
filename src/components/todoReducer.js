

export const todoReducer = (state, action) => {

  switch (action.type) {
    case 'agregar':
      return [...state, action.payload]
  
    case 'eliminar':
      return state.filter((tarea) => tarea.titulo !== action.payload);

    case 'editar':
      return state.map((tarea) => (
        tarea.titulo === action.payload.titulo ? 
        {...tarea, ['estado']: action.payload.estado}:
        tarea
      ))

    default:
      return state;
  }
}