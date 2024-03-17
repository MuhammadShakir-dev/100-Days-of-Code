const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => { 
    container.innerHTML =
    
    `
    <div class = color>
        <table border = 1dss>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
    
    `
} )
