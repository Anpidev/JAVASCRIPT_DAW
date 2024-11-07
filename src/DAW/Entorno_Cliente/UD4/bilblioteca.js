// Definimos la clase Libro
class Libro {
    constructor(titulo, autor, id) {
      this.titulo = titulo;
      this.autor = autor;
      this.id = id;  
    }
  
    // Método para mostrar el libro
    mostrarLibro() {
      console.log(`ID: ${this.id} | Nombre: ${this.titulo} | Autor: ${this.autor}`);
    }
  }
  
  // Declaramos un array vacío para la biblioteca
  let biblioteca = [];
  
  // Inicializamos una variable id global (Para que en cada instancia no empiece de cero)
  let id = 1;
  
  // Función para agregar libros
  function agregaLibros(titulo, autor) {
    let nuevoLibro = new Libro(titulo, autor,id);  // Crear un nuevo libro a partir de la clase
    biblioteca.push(nuevoLibro);  // Agregar el libro a la biblioteca
    id++; //Aumentar la id para que sea incremental y única
  }
  
  // Función para mostrar la biblioteca
  function mostrarBiblioteca() {
    biblioteca.forEach(libro => {
      libro.mostrarLibro();  // Llamar al método mostrarLibro de cada objeto libro
    });
  }
  
  // Pruebas
  agregaLibros("Cien años de soledad", "Gabriel García Márquez");
  agregaLibros("1984", "George Orwell");
  agregaLibros("Dune", "Frank Herbert");
  
  mostrarBiblioteca();  // Mostrar todos los libros
  