# vnmap

**Mira qué ha encontrado tu escaneo de nmap.** vnmap es una aplicación web que te ayuda a
construir comandos de nmap y convierte su salida en un mapa de la red, una lista priorizada de lo
que destaca y el siguiente comando que ejecutar.

Se ejecuta por completo en tu navegador: los ficheros de escaneo no salen de tu equipo y la
aplicación nunca escanea nada por sí misma.

[Demo](https://apiraces-hiberuscom.github.io/vnmap/) ·
[Descargar](https://github.com/apiraces-hiberuscom/vnmap/releases/latest) ·
[English](README.md)

## Qué es este repositorio

Este repositorio publica vnmap tal como se ejecuta: la aplicación compilada, minificada pero sin
ofuscar, y una copia portable para equipos sin acceso a internet. El JavaScript de la rama
[`gh-pages`](https://github.com/apiraces-hiberuscom/vnmap/tree/gh-pages) y de cada release es
exactamente el que ejecuta tu navegador. El código fuente está en un repositorio aparte.

## Tres formas de usarla

| Forma                    | Para qué                                                       | Necesita                                  |
| ------------------------ | -------------------------------------------------------------- | ----------------------------------------- |
| **Demo en línea**        | Probarla y usarla a diario con internet                        | Un navegador                              |
| **Aplicación instalada** | Abrirla como cualquier otra aplicación, también sin conexión   | Chrome o Edge                             |
| **Copia portable**       | Un equipo sin internet, como el de pruebas en casa del cliente | Un navegador (y `python3` en Linux/macOS) |

### Demo en línea

Abre <https://apiraces-hiberuscom.github.io/vnmap/> y pulsa **Probar con el escaneo de ejemplo**,
o suelta en la página tu propia salida de nmap (`-oX`, `-oG` o `-oN`).

### Instalarla como aplicación

En Chrome o Edge, abre la demo (o una copia portable en marcha) y elige **Usar sin conexión ›
Instalar** en el pie del lateral, o el icono de instalar de la barra de direcciones. La
aplicación instalada se abre en su propia ventana y funciona sin conexión. Cuando se publica una
versión nueva, te avisa y solo se actualiza cuando lo aceptas.

Firefox de escritorio no instala aplicaciones web: usa la copia portable. En Safari de macOS,
usa **Archivo › Añadir al Dock**.

### Copia portable

Descarga `vnmap-<versión>-portable.zip` y `SHA256SUMS` de la
[última release](https://github.com/apiraces-hiberuscom/vnmap/releases/latest).

**Windows**

1. Desbloquea el ZIP, porque viene de internet: clic derecho › **Propiedades** › marca
   **Desbloquear** › **Aceptar**. O en PowerShell:
   ```powershell
   Unblock-File .\vnmap-*-portable.zip
   ```
2. Descomprímelo y abre la carpeta `vnmap-<versión>`.
3. Haz doble clic en `vnmap.cmd`.

El lanzador usa el PowerShell que viene con Windows. No necesita permisos de administrador ni
cambia la política de ejecución del sistema: solo la omite para ese proceso.

**Linux y macOS**

```bash
unzip vnmap-*-portable.zip
./vnmap-*/vnmap.sh
```

Necesita `python3`, que tienen casi todos los sistemas. Si no está, el lanzador explica cómo
servir la carpeta `app/` con cualquier servidor estático.

**Qué hace el lanzador**

- Sirve la carpeta `app/` en <http://127.0.0.1:47821/>, solo en ese equipo: no es accesible desde
  la red.
- Abre ahí el navegador predeterminado y se cierra con `Ctrl+C` o cerrando su ventana.
- Solo atiende `GET` y `HEAD` de ficheros dentro de `app/`: sin listado de carpetas y nada de
  fuera.
- No descarga nada, no escribe fuera de su carpeta y no necesita permisos de administrador.

Si el puerto 47821 está ocupado, se para y lo dice. `--port <n>` elige otro, pero cada dirección
tiene su propio almacén de proyectos (ver más abajo), así que conviene usar siempre el mismo.

## Verificar la descarga

Compara el SHA-256 del ZIP con el de `SHA256SUMS`:

```powershell
# Windows (PowerShell): el hash debe coincidir con el de SHA256SUMS
Get-FileHash .\vnmap-*-portable.zip -Algorithm SHA256
```

```bash
sha256sum -c SHA256SUMS         # Linux
shasum -a 256 -c SHA256SUMS     # macOS
```

## Pasar proyectos de una copia a otra

Los proyectos se guardan en el navegador, que los separa por dirección. La demo y la copia
portable (y la copia portable en otro puerto) no ven los proyectos de las demás. Para pasar un
proyecto, abre **Gestión del proyecto › Portabilidad** y usa **Exportar proyecto** en una copia e
**Importar proyecto** en la otra.

## Privacidad

- **Sin peticiones de red.** Todo se lee y se guarda en tu navegador. Una política de seguridad
  de contenido estricta (`connect-src 'none'`) lo garantiza: la página no puede enviar tus datos a
  ningún sitio.
- **El contenido de los escaneos se muestra siempre como texto**, nunca se interpreta como HTML.
- **Nunca ejecuta nmap.** Solo escribe comandos y lee los ficheros que le das.
- Los únicos enlaces que salen de la aplicación (la descarga y el enlace opcional de apoyo) son
  enlaces normales que tú decides seguir.

## Uso responsable

Escanea solo sistemas propios o que tengas autorización expresa para evaluar. Escanear redes sin
permiso puede ser ilegal.

vnmap es un proyecto independiente, sin relación con el Nmap Project ni respaldado por él.

## Problemas y sugerencias

Abre un [issue](https://github.com/apiraces-hiberuscom/vnmap/issues). No adjuntes resultados de
escaneos reales: describen la red de alguien.

## Licencia

Creado por **Alejandro Piraces Perez**. Publicado con la [licencia MIT](LICENSE).
