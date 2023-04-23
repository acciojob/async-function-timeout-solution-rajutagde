const output = document.getElementById('output');
      const btn = document.getElementById('btn');

      async function showMessage() {
        const text = document.getElementById('text').value;
        const delay = parseInt(document.getElementById('delay').value);

        await new Promise(resolve => setTimeout(resolve, delay));
        output.innerText = text;
      }

      btn.addEventListener('click', showMessage);