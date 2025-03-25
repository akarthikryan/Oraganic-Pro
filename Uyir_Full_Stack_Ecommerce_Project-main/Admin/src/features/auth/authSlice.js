import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";
import { toast } from "react-toastify";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (data, thunkAPI) => {
    try {
      return await authService.getOrders(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getaOrder = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getOrder(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAOrder = createAsyncThunk(
  "order/update-order",
  async (data, thunkAPI) => {
    try {
      return await authService.updateOrder(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMonthlyData = createAsyncThunk(
  "orders/monlthdata",
  async (data, thunkAPI) => {
    try {
      return await authService.getMonthlyOrders(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getYearlyData = createAsyncThunk(
  "orders/yearlydata",
  async (data, thunkAPI) => {
    try {
      const response = await authService.getYearlyStats(data);
      console.log("API Response:", response); // Log response
      console.log("API Response Data:", response?.data); // Check if response.data exists
      return response?.data || {}; // Ensure a fallback value
    } catch (error) {
      console.error("API Error:", error);
      return thunkAPI.rejectWithValue(error?.response?.data || "Unknown error");
    }
  }
);


export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(updateAOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.updateorder = action.payload;
        if (state.isSuccess === true) {
          toast.success("Order Status Changed");
        }
      })
      .addCase(updateAOrder.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getaOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaOrder.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleorder = action.payload;
        state.message = "success";
      })
      .addCase(getaOrder.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getMonthlyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonthlyData.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.monthlyData = action.payload;
        state.message = "success";
      })
      .addCase(getMonthlyData.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getYearlyData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getYearlyData.fulfilled, (state, action) => {
        console.log("Fulfilled Payload:", action.payload); // ✅ Debug payload
        state.isLoading = false;
        state.yearlyData = action.payload?.data || action.payload || {}; // ✅ Prevent errors
      })
      .addCase(getYearlyData.rejected, (state, action) => {
        console.error("Rejected Payload:", action.payload);
        state.isLoading = false;
        state.isError = action.payload || "An error occurred";
      });
  },
});

export default authSlice.reducer;
