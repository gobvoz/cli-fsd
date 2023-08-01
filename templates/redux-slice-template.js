const reduxSliceTemplate = sliceName => {
  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
import { ${sliceName.pascalCase}Schema } from '../types/${sliceName.kebabCase}.schema';

const initialState: ${sliceName.pascalCase}Schema = {

};

const ${sliceName.camelCase}Slice = createSlice({
  name: '${sliceName.camelCase}',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<${sliceName.pascalCase}Schema>) => {
      state = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(templateAction.pending, (state, action) => {
  //     state.error = undefined;
  //     state.loading = true;
  //   });
  //   builder.addCase(templateAction.fulfilled, (state, action) => {
  //     state.error = undefined;
  //     state.loading = false;
  //     state.data = action.payload;
  //   });
  //   builder.addCase(templateAction.rejected, (state, action) => {
  //     state.error = action.error;
  //     state.loading = false;
  //   });
  // },
});

export const { actions: ${sliceName.camelCase}Actions } = ${sliceName.camelCase}Slice;
export const { reducer: ${sliceName.camelCase}Reducer } = ${sliceName.camelCase}Slice;
`;
};

export default reduxSliceTemplate;
