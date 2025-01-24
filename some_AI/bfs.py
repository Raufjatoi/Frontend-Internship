import numpy as np
import matplotlib.pyplot as plt
from collections import deque

# Define the maze (0 = path, 1 = wall)
maze = np.array([
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
])

# Define start and goal positions
start = (0, 0)
goal = (4, 4)

# Directions for moving in the maze (up, down, left, right)
directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

# Function to perform BFS and visualize the search
def bfs_visualization(maze, start, goal):
    rows, cols = maze.shape
    queue = deque([start])
    visited = set()
    visited.add(start)
    parent = {}  # To keep track of the path

    # Create a plot to visualize the maze and search
    plt.figure(figsize=(5, 5))
    plt.imshow(maze, cmap='binary')
    plt.title("BFS Maze Visualization")
    plt.xticks([]), plt.yticks([])

    # Mark start and goal positions
    plt.scatter(start[1], start[0], marker="o", color="green", s=200, label="Start")
    plt.scatter(goal[1], goal[0], marker="*", color="red", s=200, label="Goal")

    while queue:
        current = queue.popleft()

        # If goal is reached, reconstruct and visualize the path
        if current == goal:
            path = []
            while current in parent:
                path.append(current)
                current = parent[current]
            path.append(start)
            path.reverse()

            # Plot the path
            for (x, y) in path:
                plt.scatter(y, x, marker="x", color="blue", s=100)
            plt.legend()
            plt.show()
            return True

        # Explore neighbors
        for direction in directions:
            next_row, next_col = current[0] + direction[0], current[1] + direction[1]

            if (0 <= next_row < rows and 0 <= next_col < cols and
                maze[next_row, next_col] == 0 and (next_row, next_col) not in visited):
                queue.append((next_row, next_col))
                visited.add((next_row, next_col))
                parent[(next_row, next_col)] = current

                # Visualize the current search step
                plt.scatter(next_col, next_row, marker=".", color="orange", s=100)
                plt.pause(0.1)  # Pause to visualize the search step

    # If no path is found
    plt.legend()
    plt.show()
    return False

# Run the BFS visualization
bfs_visualization(maze, start, goal)