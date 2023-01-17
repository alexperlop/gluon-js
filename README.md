# gluon-js
Uso de Gluon para apliación de escritorio


Este es un proyecto de prueba para usar Gluon un framework de JS para crear aplicaciones de escritorio, muy parecido a Electron, con ciertas diferencias como : el posible uso de firefox, utiliza los navegadores ya instalados, de forma que no tienes que descargarlos de nuevo, utiliza el Nodejs ya instalado o empaqueta uno nuevo, lo que se verá reflejado en el almacenamiento de la aplicación siendo de 1MB en Gluon y de 220MB en Electron  


Comparisons
Internals
Part	Gluon	Electron	Tauri	Neutralinojs
Frontend	System installed Chromium or Firefox	Self-contained Chromium	System installed webview	System installed webview
Backend	System installed or bundled Node.JS	Self-contained Node.JS	Native (Rust)	Native (Any)
IPC	Window object	Preload	Window object	Window object
Status	Early in development	Production ready	Usable	Usable
Ecosystem	Integrated	Distributed	Integrated	Integrated
