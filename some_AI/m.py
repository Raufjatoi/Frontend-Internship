from manim import *
import random
from collections import deque

# Complex maze generation using recursive backtracking
def generate_maze(width, height):
    maze = [[1 for _ in range(width)] for _ in range(height)]
    
    def carve(x, y):
        maze[y][x] = 0
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        random.shuffle(directions)
        
        for dx, dy in directions:
            nx, ny = x + dx*2, y + dy*2
            if 0 <= nx < width and 0 <= ny < height and maze[ny][nx] == 1:
                maze[y + dy][x + dx] = 0
                carve(nx, ny)
    
    carve(1, 1)  # Start carving from (1,1)
    return maze

# Generate a 15x15 maze
maze = generate_maze(15, 15)
start = (1, 1)
goal = (13, 13)

# Manim visualization
class BFSMaze(Scene):
    def construct(self):
        # Create grid
        grid = self.create_grid(maze)
        self.play(Create(grid))
        self.wait(1)

        # Define start and goal cells
        start_cell = self.get_cell(grid, start[0], start[1])
        goal_cell = self.get_cell(grid, goal[0], goal[1])
        self.highlight_cell(start_cell, GREEN)
        self.highlight_cell(goal_cell, RED)
        self.wait(1)

        # BFS setup
        queue = deque([(start[0], start[1])])
        visited = set()
        visited.add((start[0], start[1]))
        parent = {}
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        found = False

        # Animate BFS
        while queue:
            current = queue.popleft()
            cx, cy = current

            if current == (goal[0], goal[1]):
                found = True
                break

            for dx, dy in directions:
                nx, ny = cx + dx, cy + dy
                if (
                    0 <= nx < len(maze[0])
                    and 0 <= ny < len(maze)
                    and maze[ny][nx] == 0
                    and (nx, ny) not in visited
                ):
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    parent[(nx, ny)] = (cx, cy)
                    
                    # Animate exploration
                    cell = self.get_cell(grid, nx, ny)
                    self.highlight_cell(cell, YELLOW, animate=True)
                    self.wait(0.1)

        # Reconstruct path
        if found:
            path = []
            current = (goal[0], goal[1])
            while current != (start[0], start[1]):
                path.append(current)
                current = parent[current]
            path.append((start[0], start[1]))
            path.reverse()

            # Animate path
            for (x, y) in path:
                cell = self.get_cell(grid, x, y)
                self.highlight_cell(cell, BLUE, animate=True)
                self.wait(0.1)

    def create_grid(self, maze):
        grid = VGroup()
        for y, row in enumerate(maze):
            for x, cell in enumerate(row):
                square = Square(side_length=0.5, color=WHITE)
                square.set_fill(BLACK if cell == 1 else WHITE, opacity=1)
                square.move_to((x - len(row)/2, y - len(maze)/2, 0))
                grid.add(square)
        return grid

    def get_cell(self, grid, x, y):
        index = y * len(maze[0]) + x
        return grid[index]

    def highlight_cell(self, cell, color, animate=False):
        if animate:
            self.play(cell.animate.set_fill(color, opacity=0.7))
        else:
            cell.set_fill(color, opacity=0.7)