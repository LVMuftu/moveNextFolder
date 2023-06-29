const fs = require('fs');
const path = require('path');

const goToChildFolder = (currentPath, targetFolder) => {
  const separator = '/';
  const newPath = path.join(currentPath, targetFolder);

  if (fs.existsSync(newPath)) {
    console.log("İleri gidilen klasör:", newPath);
    // Diğer işlemleri buraya ekleyebilirsiniz.
  } else {
    console.log("Gidilecek klasör bulunamadı.");
  }
};
