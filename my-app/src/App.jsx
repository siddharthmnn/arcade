import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TicTacToe from "./pages/TicTacToe";
import Sudoku from "./pages/Sudoku";
import Minesweeper from "./pages/Minesweeper";
import RPS from "./pages/RPS";
import Dice from "./pages/Dice";
import Game2048 from "./pages/Game2048";
import TowerOfHanoi from "./pages/TowerOfHanoi";
import HandCricket from "./pages/HandCricket";

const ProtectedRoute = ({ children }) => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (!username || !password) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

        {/* Home is protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ALL GAMES ARE PROTECTED NOW */}
        <Route
          path="/tictactoe"
          element={
            <ProtectedRoute>
              <TicTacToe />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sudoku"
          element={
            <ProtectedRoute>
              <Sudoku />
            </ProtectedRoute>
          }
        />

        <Route
          path="/minesweeper"
          element={
            <ProtectedRoute>
              <Minesweeper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rps"
          element={
            <ProtectedRoute>
              <RPS />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dice"
          element={
            <ProtectedRoute>
              <Dice />
            </ProtectedRoute>
          }
        />

        <Route
          path="/2048"
          element={
            <ProtectedRoute>
              <Game2048 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tower"
          element={
            <ProtectedRoute>
              <TowerOfHanoi />
            </ProtectedRoute>
          }
        />

        <Route
          path="/freeplay"
          element={
            <ProtectedRoute>
              <HandCricket />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
