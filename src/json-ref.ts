
import { JsonPointer } from './json-ptr';

export class JsonReference {
  constructor(ref:string) {
    var filename = JsonReference.getFilename(ref);
    var pointer = (ref && ref.substring(filename.length+1)) || "";
    this._pointer = new JsonPointer(decodeURIComponent(pointer));
    this._filename = filename;
  }

  public static getFilename(ref:string) {
    var filename = "";
    if (ref != null) {
      let hashPos = ref.indexOf('#');
      if (-1 != hashPos) {
        filename = ref.substring(0, hashPos);
      } else {
        filename = ref;
      }
    }
    return filename;
  }

  get filename() {
    return this._filename;
  }
  get pointer():JsonPointer {
    return this._pointer;
  }

  public toString():string {
    return this._filename+'#'+this._pointer;
  }

  private _filename:string;
  private _pointer:JsonPointer;
}
