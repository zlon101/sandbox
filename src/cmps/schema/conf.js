export const ArrayTableJson = {
  type: "object",
  properties: {
    array: {
      type: "array",
      "x-decorator": "FormItem",
      "x-component": "ArrayTable",
      "x-component-props": {
        pagination: { pageSize: 10 },
        scroll: { x: 800 },
      },
      items: {
        type: "object",
        properties: {
          column1: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              width: 80,
              title: "Index",
              align: "center",
            },
            properties: {
              index: {
                type: "void",
                "x-component": "ArrayTable.Index",
              },
            },
          },
          column2: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": { width: 200, title: "A1" },
            properties: {
              a1: {
                type: "string",
                "x-decorator": "Editable",
                "x-component": "Input",
              },
            },
          },
          column4: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": { title: "A3" },
            properties: {
              a3: {
                type: "string",
                "x-decorator": "FormItem",
                "x-component": "Input",
              },
            },
          },
          column5: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              title: "Operations",
              prop: "operations",
              width: 200,
              fixed: "right",
            },
            properties: {
              item: {
                type: "void",
                "x-component": "FormItem",
                properties: {
                  remove: {
                    type: "void",
                    "x-component": "ArrayTable.Remove",
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: "void",
          "x-component": "ArrayTable.Addition",
          title: "添加条目",
        },
      },
    },
  },
};

export const ArrayCardsJson = {
  type: "object",
  properties: {
    string_array: {
      type: "array",
      "x-component": "ArrayCards",
      maxItems: 3,
      "x-decorator": "FormItem",
      "x-component-props": {
        title: "字符串数组",
      },
      items: {
        type: "object",
        properties: {
          index: {
            type: "void",
            "x-component": "ArrayCards.Index",
          },
          input: {
            type: "string",
            "x-decorator": "FormItem",
            title: "Input",
            required: true,
            "x-component": "Input",
          },
          ArrayTableJson,
          remove: {
            type: "void",
            "x-component": "ArrayCards.Remove",
          },
        },
      },
      properties: {
        addition: {
          type: "void",
          title: "添加条目",
          "x-component": "ArrayCards.Addition",
        },
      },
    },
  },
};
