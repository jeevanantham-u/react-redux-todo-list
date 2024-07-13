import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_url = 'http://localhost:8000/tasks';

const initialState = {
    tasksList: [],
    selectedTask: {},
    isLoading: false,
    error: ''
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state) => {
            state.tasksList.push(task);
        },
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.error = action.payload.error;
                state.isLoading = false;
                state.tasksList = [];
            })
            .addCase(postTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(postTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList.push(action.payload);
            })
            .addCase(postTask.rejected, (state, action) => {
                state.error = action.payload.error
                state.isLoading = false
            })
    }

});

//GET
export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (_, { rejectWithValue }) => {
        const response = await fetch(base_url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            return rejectWithValue({ error: 'No Tasks Found' });
        }
    }
);

//POST
export const postTask = createAsyncThunk(
    "tasks/postTask",
    async (task, { rejectWithValue }) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        const response = await fetch(base_url, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } else {
            return rejectWithValue({ error: 'No task are added' });
        }
    }
);

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions;

export default tasksSlice.reducer;