//

export class RefBox {
  //
  //  storageLabel: 'refBox1',
  //  refIndex: 0,
  //  width: 4800,
  //  height: 3200,
  //  refs: [{ label: '', regions: [{ x, y, w, h, z }, { x, y, w, h, z }], i } ]

  // { storageLabel, refIndex, width, height, refs }
  constructor(props) {
    //
    Object.assign(this, props);
    if (!this.storageLabel) {
      // width and height needed if no storageLabel
      // this.width = this.backImage.width;
      // this.height = this.backImage.height;
      this.storageLabel = 'refBox1';
      this.refIndex = 0;
      this.refs = [];
    }
    this.restore_localStorage();
    this.restore_refIndex();
  }

  mapToImage(image) {
    // console.log('RefBox mapToImage', image);
    if (image.width == this.width) {
      return;
    }
    let fmap = image.width / this.width;
    console.log('RefBox fmap', fmap);
    for (let ent of this.refs) {
      for (let rg of ent.regions) {
        rg.h = Math.floor(rg.h * fmap);
        rg.w = Math.floor(rg.w * fmap);
        rg.x = Math.floor(rg.x * fmap);
        rg.y = Math.floor(rg.y * fmap);
      }
    }
  }

  restore_refBox(refBox) {
    Object.assign(this, refBox);
    // this.patchRefbox();
  }

  refEntry() {
    let refIndex = this.refIndex;
    let ent = this.refs[refIndex];
    if (!ent) {
      let i = this.refs.length + 1;
      ent = { label: '', i, regions: [{}, {}] };
      this.refs[refIndex] = ent;
    }
    return ent;
  }

  get refLabel() {
    let ent = this.refEntry();
    return ent.label;
  }

  set refLabel(label) {
    let ent = this.refEntry();
    ent.label = label;
  }

  save_refIndex() {
    let key = this.storageLabel + '_refIndex';
    let refIndex = this.refIndex;
    let refObj = { refIndex };
    let str = JSON.stringify(refObj);
    localStorage.setItem(key, str);
  }

  restore_refIndex() {
    let key = this.storageLabel + '_refIndex';
    let str = localStorage.getItem(key);
    if (!str) {
      ui_log('restore_refIndex no str', key);
      return;
    }
    ui_log('restore_refIndex key', key, 'str', str);
    let refObj;
    try {
      refObj = JSON.parse(str);
    } catch (err) {
      ui_log('restore_refIndex parse err', err);
      return;
    }
    this.refIndex = refObj.refIndex;
  }

  restore_localStorage() {
    ui_log('restore_localStorage');
    let refBox;
    let str = localStorage.getItem(this.storageLabel);
    if (!str || this.reloadLocal) {
      ui_log('restore_localStorage no str', this.storageLabel);
      return;
    }
    ui_log('restore_localStorage storageLabel', this.storageLabel, 'str.length', str.length);
    try {
      refBox = JSON.parse(str);
    } catch (err) {
      ui_log('restore_localStorage parse err', err);
      return;
    }
    Object.assign(this, refBox);
  }

  save_localStorage() {
    let refBox = this;
    let str = JSON.stringify(refBox);
    localStorage.setItem(this.storageLabel, str);
    ui_log('save_localStorage storageLabel', this.storageLabel, 'str.length', str.length);
    // let n = this.refs.length;
    // console.log('save_localStorage ', n, this.refs[n - 1].label);
    let ii = this.refIndex;
    ui_log('save_localStorage ', ii + 1, this.refs[ii].label);

    if (my.mo_app) {
      ui_log('save_localStorage my.mo_app', my.mo_app);
      dbase_update_item({ refBox }, 'item');
    }
  }

  patchRefbox() {
    let refBox = this;
    let count = 0;
    for (let index = 0; index < refBox.refs.length; index++) {
      let ent = refBox.refs[index];
      if (ent.regions[1].z !== 1 && ent.regions[1].z !== 5) {
        ent.regions[1].z = 5;
        count++;
      }
    }
    ui_log('patchRefbox count', count);
    this.save_localStorage();
  }
}

// // Corrects to refBox store
// patchRefbox() {
//   let refBox = this;
//   let last = 0;
//   for (let index = 0; index < refBox.refs.length; index++) {
//     let ent = refBox.refs[index];
//     ent.i = index + 1;
//     if (!ent.regions[this.regionIndex].w) {
//       last = index;
//     }
//   }
//   if (last) {
//     ui_log('patchRefbox splice last', last);
//     refBox.refs.splice(last, 1);
//   }
//   refBox.label = refBox.label;
//   refBox.refs = refBox.refs;
//   this.save_localStorage();
// }

globalThis.RefBox = RefBox;

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
//
export function downloadToFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
globalThis.downloadToFile = downloadToFile;
