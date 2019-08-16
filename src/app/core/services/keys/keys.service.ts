import { Injectable } from "@angular/core";
import { isPromiseAlike } from "q";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class KeysService {
  keys = [
    {
      id_key: 1,
      description_key: "user_id"
    },
    {
      id_key: 2,
      description_key: "item_id"
    },
    {
      id_key: 3,
      description_key: "user_email"
    },
    {
      id_key: 4,
      description_key: "item_views"
    },
    {
      id_key: 5,
      description_key: "item_favorites"
    }
  ];
  datatype = [
    {
      id_datatype: 1,
      description_datatype: "Integer"
    },
    {
      id_datatype: 2,
      description_datatype: "Varchar"
    },
    {
      id_datatype: 3,
      description_datatype: "Char"
    },
    {
      id_datatype: 4,
      description_datatype: "Text"
    },
    {
      id_datatype: 5,
      description_datatype: "Boolean"
    }
  ];
  info_keys = [
    {
      id_info: 1,
      id_key: 1,
      id_datatype: 1,
      description_info:
        "Contains the primary key used to identify a user of the system",
      is_personal: true
    },
    {
      id_info: 2,
      id_key: 2,
      id_datatype: 1,
      description_info:
        "Contains the primary key used to identify a user of the system",
      is_personal: true
    },
    {
      id_info: 3,
      id_key: 3,
      id_datatype: 3,
      description_info: "Contain the email",
      is_personal: true
    },
    {
      id_info: 4,
      id_key: 4,
      id_datatype: 4,
      description_info: " contain the item views",
      is_personal: true
    },
    {
      id_info: 5,
      id_key: 5,
      id_datatype: 1,
      description_info: "contain favorites",
      is_personal: true
    }
  ];
  possible_values = [
    {
      id_possible: 1,
      id_key: 1,
      value: "null",
      description: "value when user is not found"
    },
    {
      id_possible: 2,
      id_key: 1,
      value: "{integer}",
      description: "ID Key of user"
    },
    {
      id_possible: 3,
      id_key: 2,
      value: "null",
      description: "value when user is not found"
    },
    {
      id_possible: 4,
      id_key: 2,
      value: "{integer}",
      description: "value  Key of user"
    },
    {
      id_possible: 5,
      id_key: 3,
      value: "null",
      description: "value when user is not found"
    },
    {
      id_possible: 6,
      id_key: 3,
      value: "{char}",
      description: "value  Key of user"
    },
    {
      id_possible: 7,
      id_key: 4,
      value: "null",
      description: "value when user is not found"
    },
    {
      id_possible: 8,
      id_key: 4,
      value: "{varchar}",
      description: "value  Key of user"
    },
    {
      id_possible: 9,
      id_key: 5,
      value: "null",
      description: "value when user is not found"
    },
    {
      id_possible: 10,
      id_key: 5,
      value: "{char}",
      description: "value  Key of user"
    }
  ];
  request = [
    {
      id_request: 1,
      date: "2017/09/21",
      reason: "Data science algorithms",
      estatus: "Pending"
    },
    {
      id_request: 2,
      date: "2017/08/13",
      reason: "Stakeholder dashboards",
      estatus: "Aproved"
    },
    {
      id_request: 3,
      date: "2017/07/03",
      reason: "Email blast",
      estatus: "Denied"
    },
    {
      id_request: 4,
      date: "2017/02/09",
      reason: "Investigation",
      estatus: "Approved"
    },
    {
      id_request: 5,
      date: "2017/09/21",
      reason: "Data science algorithms",
      estatus: "Pending"
    },
    {
      id_request: 6,
      date: "2017/08/13",
      reason: "Stakeholder dashboards",
      estatus: "Approved"
    },
    {
      id_request: 7,
      date: "2017/07/03",
      reason: "Email blast",
      estatus: "Denied"
    },
    {
      id_request: 8,
      date: "2017/02/09",
      reason: "Investigation",
      estatus: "Approved"
    },
    {
      id_request: 9,
      date: "2017/09/21",
      reason: "Data science algorithms",
      estatus: "Pending"
    },
    {
      id_request: 10,
      date: "2017/08/13",
      reason: "Stakeholder dashboards",
      estatus: "Approved"
    },
    {
      id_request: 11,
      date: "2017/07/03",
      reason: "Email blast",
      estatus: "Pending"
    },
    {
      id_request: 12,
      date: "2017/02/09",
      reason: "Investigation",
      estatus: "Approved"
    }
  ];

  constructor() {}
  public getKeys() {
    return new Promise(resolve => {
      resolve(this.keys);
    });
  }
  public getdatatype() {
    return new Promise(resolve => {
      resolve(this.datatype);
    });
  }
  public getPossiblevalues(key) {
    return this.possible_values.filter(
      possible_values => possible_values.id_key == key
    );
  }
  public searchInfoKey(key) {
    return this.info_keys.filter(info_key => info_key.id_key == key);
  }
  public searchKey(key) {
    return this.keys.filter(keys => keys.id_key == key);
  }
  public editKey(id_key, key_name, descripcion, type, is_personal) {
    return new Promise(resolve => {
      this.info_keys.map(function(dato) {
        if (dato.id_key == id_key) {
          dato.id_datatype = type;
          dato.description_info = descripcion;
          dato.is_personal = is_personal;
        }
        return dato;
      });
      this.keys.map(function(dato) {
        if (dato.id_key == id_key) {
          dato.description_key = key_name;
        }
        return dato;
      });
      resolve(key_name);
    });
  }
  public getAllRequest() {
    return this.request;
  }
  public savePossibleValuesKey(id_key, value, descripcion) {
    var idpossible = Math.round(Math.random() * 100);
    return new Promise(resolve => {
      this.possible_values.push({
        id_possible: idpossible,
        id_key: id_key,
        value: value,
        description: descripcion
      });
      resolve(id_key);
    });
  }
  public editPossibleValues(idpossible, id_key, value, descripcion) {
    return new Promise(resolve => {
      this.possible_values.map(function(dato) {
        if (dato.id_possible == idpossible) {
          dato.id_key = id_key;
          dato.value = value;
          dato.description = descripcion;
        }
        return dato;
      });
      resolve(idpossible);
    });
  }
}
