import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomePostOptionState = "view all" | "cars" | "accessories";
const initialState =
    "view all" satisfies HomePostOptionState as HomePostOptionState;

const homePostOptionSlice = createSlice({
    name: "homePostOption",
    initialState,
    reducers: {
        setPostOption: (_, action: PayloadAction<HomePostOptionState>) =>
            action.payload,
    },
});

export const { setPostOption } = homePostOptionSlice.actions;
export default homePostOptionSlice.reducer;
