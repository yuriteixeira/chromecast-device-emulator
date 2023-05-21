export const scenarioSchema = {
  "properties": {
    "timeline": {
      "$id": "/properties/timeline",
      "items": {
        "$id": "/properties/timeline/items",
        "properties": {
          "ipcMessage": {
            "$id": "/properties/timeline/items/properties/ipcMessage",
            "type": "string"
          },
          "time": {
            "$id": "/properties/timeline/items/properties/time",
            "type": "integer"
          }
        },
        "required": ["ipcMessage", "time"],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": ["timeline"],
  "type": "object"
}

export const ipcMessageSchema = {
  "properties": {
    "data": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "senderId": {
      "type": "string"
    }
  },
  "required": ["data", "namespace", "senderId"],
  "type": "object"
}
