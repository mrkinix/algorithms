export const ELI5 = {
  // ─── SORTING ──────────────────────────────────────────────────────────────
  'Sorting:bubble_sort': {
    eli5: "Walk through the list again and again, swapping any two neighbours that are in the wrong order. Like bubbles of air rising to the surface — big numbers slowly bubble to the end.",
    pros: ["Easy to code", "No extra memory", "Stable sort"],
    cons: ["O(n²) — very slow on large data", "Many unnecessary swaps"],
    uses: ["Teaching sorting basics", "Tiny arrays < 20 items"],
    avoid: "Production code or large datasets",
    time: "O(n²)",
    space: "O(1)",
    desc: "Repeatedly compares adjacent elements and swaps them if in the wrong order. Continues until no swaps occur."
  },
  'Sorting:insertion_sort': {
    eli5: "Like sorting playing cards in your hand: pick one card at a time and slide it left until it's in the right spot among the already-sorted cards.",
    pros: ["Fast on nearly-sorted data", "Stable", "Very low overhead"],
    cons: ["O(n²) on random data", "Many element shifts"],
    uses: ["Small arrays", "Nearly-sorted streams", "Sub‑routine in Timsort"],
    avoid: "Large random datasets",
    time: "O(n²)",
    space: "O(1)",
    desc: "Builds the sorted array one element at a time by inserting each new element into its correct position."
  },
  'Sorting:selection_sort': {
    eli5: "Scan everything, find the smallest item, put it first. Scan the rest, find the next smallest, put it second. Keep going.",
    pros: ["Minimal swaps O(n)", "Simple to understand"],
    cons: ["Always O(n²) comparisons", "Not stable"],
    uses: ["When swaps are costly (flash memory)", "Tiny arrays"],
    avoid: "Any performance‑sensitive code",
    time: "O(n²)",
    space: "O(1)",
    desc: "Divides array into sorted/unsorted parts; repeatedly picks the minimum from unsorted and appends to sorted."
  },
  'Sorting:quick_sort': {
    eli5: "Pick a pivot number. Put smaller numbers left, bigger ones right. Do the same on each side recursively. Divide and conquer!",
    pros: ["Fastest average case O(n log n)", "In‑place (O(log n) stack)", "Cache‑friendly"],
    cons: ["Worst case O(n²) with bad pivot", "Not stable", "Recursive stack risk"],
    uses: ["Most languages' built‑in sort", "General purpose sorting"],
    avoid: "When guaranteed worst‑case is required",
    time: "O(n log n) average, O(n²) worst",
    space: "O(log n)",
    desc: "Divide‑and‑conquer: pick a pivot, partition around it, recursively sort both partitions."
  },
  'Sorting:merge_sort': {
    eli5: "Split the list in half. Sort each half. Merge them like shuffling two sorted card decks. Always guaranteed fast!",
    pros: ["Guaranteed O(n log n)", "Stable", "Excellent for linked lists"],
    cons: ["O(n) extra memory", "Slower constants than quicksort"],
    uses: ["External sort (data > RAM)", "Stable sort needs", "Standard library sorts"],
    avoid: "Memory‑constrained environments",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Recursively splits the array, sorts each half, and merges them back in sorted order."
  },
  'Sorting:heap_sort': {
    eli5: "Build a heap (a tree where the top is always the biggest). Keep pulling the top off and placing it at the end. Guaranteed fast with no extra memory!",
    pros: ["Guaranteed O(n log n)", "In‑place O(1) space", "Consistent performance"],
    cons: ["Not stable", "Poor cache behavior", "Slower than quicksort in practice"],
    uses: ["Real‑time / embedded systems", "When O(1) space is required"],
    avoid: "When average‑case speed matters most",
    time: "O(n log n)",
    space: "O(1)",
    desc: "Converts the array to a max‑heap, then repeatedly extracts the max to produce sorted output."
  },
  'Sorting:shell_sort': {
    eli5: "Like insertion sort but you compare items far apart first, then closer. Pre‑arranging from a distance makes the final pass super fast.",
    pros: ["Much faster than insertion sort", "In‑place", "Simple to implement"],
    cons: ["Not stable", "Complex time analysis", "Slower than O(n log n) algorithms"],
    uses: ["Embedded systems", "Limited memory environments"],
    avoid: "When a guaranteed complexity is needed",
    time: "O(n log² n)",
    space: "O(1)",
    desc: "A generalization of insertion sort that sorts elements at decreasing gap intervals."
  },
  'Sorting:counting_sort': {
    eli5: "Count how many times each number appears. Use those counts to place numbers in the right spots. No comparisons needed at all!",
    pros: ["Linear time O(n+k)", "Stable", "Very fast for small integer ranges"],
    cons: ["Only integers in a known range", "Needs O(k) extra memory"],
    uses: ["Integer sorting with small range", "Radix sort sub‑routine"],
    avoid: "Floats, strings, or huge value ranges",
    time: "O(n+k)",
    space: "O(k)",
    desc: "Counts occurrences of each value, uses prefix sums to determine sorted positions."
  },
  'Sorting:radix_sort': {
    eli5: "Sort numbers digit by digit from rightmost to leftmost, using counting sort each time. After all digits, the array is fully sorted!",
    pros: ["Linear O(d·n) for fixed‑width ints", "Stable"],
    cons: ["Only integers/fixed‑length strings", "More complex code"],
    uses: ["Phone numbers", "IP addresses", "Fixed‑width integer arrays"],
    avoid: "Variable‑length or floating‑point data",
    time: "O(d·n)",
    space: "O(n+k)",
    desc: "Sorts integers by processing individual digits from least to most significant using stable sub‑sorts."
  },
  'Sorting:bucket_sort': {
    eli5: "Scatter numbers into buckets by their range. Sort each small bucket. Pour them all out in order.",
    pros: ["O(n+k) average for uniform data", "Parallelizable"],
    cons: ["O(n²) worst case", "Needs extra memory", "Sensitive to data distribution"],
    uses: ["Uniform distribution floats [0,1)", "Distributed sorting"],
    avoid: "Skewed or clustered data",
    time: "O(n+k) average, O(n²) worst",
    space: "O(n)",
    desc: "Distributes elements into equal‑width buckets, sorts each bucket, then concatenates."
  },
  'Sorting:bogo_sort': {
    eli5: "Shuffle the list randomly. Is it sorted? No? Shuffle again. Repeat until you get lucky. This is a JOKE algorithm — never ever use it!",
    pros: ["It's funny", "Terminates... eventually"],
    cons: ["Average O(n·n!) — practically infinite", "Randomness‑dependent"],
    uses: ["Teaching worst‑case algorithms", "Comedy"],
    avoid: "Everything in existence",
    time: "O(n·n!)",
    space: "O(1)",
    desc: "Randomly permutes the array until it happens to be sorted. A joke sorting algorithm."
  },
  'Sorting:gnome_sort': {
    eli5: "Move forward if items are in order, swap and step back if they're not. Like a garden gnome sorting flower pots.",
    pros: ["Simple code", "In‑place and stable"],
    cons: ["O(n²) worst case", "Slow in practice"],
    uses: ["Teaching", "Tiny arrays"],
    avoid: "Anything real",
    time: "O(n²)",
    space: "O(1)",
    desc: "Moves through the array, swapping adjacent elements and stepping back until the whole array is sorted."
  },
  'Sorting:cocktail_shaker_sort': {
    eli5: "Like bubble sort but goes back and forth — forward AND backward each pass. Both ends get sorted simultaneously.",
    pros: ["Slightly faster than bubble sort", "Handles turtles (small values at end)"],
    cons: ["Still O(n²)", "More complex than bubble sort"],
    uses: ["Teaching bidirectional traversal"],
    avoid: "Large datasets",
    time: "O(n²)",
    space: "O(1)",
    desc: "A bidirectional variant of bubble sort that passes left‑to‑right then right‑to‑left each iteration."
  },
  'Sorting:comb_sort': {
    eli5: "Like bubble sort but instead of comparing neighbours, compare items further apart first, shrinking the gap each pass. Much faster than bubble sort.",
    pros: ["Faster than bubble sort in practice", "Simple to implement", "In‑place"],
    cons: ["Not stable", "Complex worst‑case analysis"],
    uses: ["When bubble sort is too slow but simplicity matters"],
    avoid: "Production environments",
    time: "O(n²) worst, but often near O(n log n)",
    space: "O(1)",
    desc: "Improves bubble sort by using a gap > 1 initially, gradually shrinking it to 1."
  },
  'Sorting:cycle_sort': {
    eli5: "Think of each element as belonging to a cycle. Move each element directly to its correct position, completing cycles one at a time. Minimizes writes!",
    pros: ["Theoretical minimum writes O(n)", "In‑place"],
    cons: ["O(n²) comparisons", "Complex to implement"],
    uses: ["Flash/EEPROM where writes are expensive"],
    avoid: "General‑purpose sorting",
    time: "O(n²)",
    space: "O(1)",
    desc: "Places each element in its correct position directly, minimizing the total number of write operations."
  },
  'Sorting:pancake_sort': {
    eli5: "You can only flip a prefix of the array (like flipping a stack of pancakes). Repeatedly find the max and flip it to the front, then flip it to its final position.",
    pros: ["Only needs prefix reversal operations", "Interesting sorting model"],
    cons: ["O(n²) performance", "Not practical"],
    uses: ["Biological sorting models", "Theoretical CS"],
    avoid: "Any real sorting task",
    time: "O(n²)",
    space: "O(1)",
    desc: "Sorts by repeatedly flipping prefixes of the array to move elements to their correct positions."
  },
  'Sorting:wiggle_sort': {
    eli5: "Rearrange the array so it alternates: small, big, small, big... Like a zigzag line. Not fully sorted, just wiggled!",
    pros: ["O(n) linear time", "In‑place"],
    cons: ["Not a full sort — just a specific arrangement", "Limited use cases"],
    uses: ["Interview problem", "Specific data processing patterns"],
    avoid: "When you need fully sorted output",
    time: "O(n)",
    space: "O(1)",
    desc: "Rearranges the array so nums[0] ≤ nums[1] ≥ nums[2] ≤ nums[3]… in an alternating pattern."
  },
  'Sorting:bead_sort': {
    eli5: "Imagine numbers as rows of beads on vertical rods. Let the beads fall like gravity — they stack up and the rows become sorted. It's a visual, mechanical sort.",
    pros: ["Very fast O(n) for small positive integers", "Interesting concept"],
    cons: ["Only works for positive integers", "Impractical for large numbers", "Hardware‑dependent"],
    uses: ["Theoretical computer science", "Parallel sorting models"],
    avoid: "Real‑world data",
    time: "O(n) or O(√n) depending on implementation",
    space: "O(n²) worst",
    desc: "Models numbers as beads on parallel rods; gravity causes beads to fall into sorted order. Mostly a curiosity."
  },
  'Sorting:bitonic_sort': {
    eli5: "Build a 'bitonic' sequence (first increasing, then decreasing) and then repeatedly merge halves. Designed for parallel processors where you can compare many pairs at once.",
    pros: ["Excellent for parallel computing", "O(log² n) with many processors"],
    cons: ["Complex to implement sequentially", "Not in‑place"],
    uses: ["GPU sorting", "Parallel architectures"],
    avoid: "Single‑threaded CPU sorting",
    time: "O(n log² n)",
    space: "O(n log² n) with parallel, O(n) sequential",
    desc: "Recursively sorts a bitonic sequence (increasing then decreasing) by comparing and swapping elements from opposite halves."
  },
  'Sorting:stooge_sort': {
    eli5: "A joke sort: if the first element is larger than the last, swap them. Then recursively sort the first 2/3, the last 2/3, and the first 2/3 again. It's terribly slow!",
    pros: ["None — it's a pedagogical horror"],
    cons: ["O(n^2.7) — even slower than bubble sort", "Complicated recursion"],
    uses: ["Teaching why bad algorithms are bad"],
    avoid: "Absolutely everything",
    time: "O(n^(log 3 / log 1.5)) ≈ O(n^2.7)",
    space: "O(log n) stack",
    desc: "A recursive sorting algorithm that repeatedly sorts the first two‑thirds, last two‑thirds, and first two‑thirds again. Extremely inefficient."
  },

  // ─── SEARCHING ────────────────────────────────────────────────────────────
  'Searching:binary_search': {
    eli5: "Open a phone book to the middle. Is your name before or after? Throw away half the book. Repeat. You find the name in just log₂(n) steps!",
    pros: ["O(log n) — extremely fast", "Simple and well‑understood"],
    cons: ["Requires sorted input", "Not for linked lists"],
    uses: ["Database indexes", "Sorted arrays", "Standard library searches"],
    avoid: "Unsorted collections",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds a target in a sorted array by halving the search space at each step."
  },
  'Searching:linear_search': {
    eli5: "Check each item one by one from the start until you find what you want. Simple, but slow for large lists.",
    pros: ["Works on unsorted data", "No preprocessing", "Simple"],
    cons: ["O(n) worst case", "Slow on large data"],
    uses: ["Small unsorted lists", "Linked lists", "One‑off searches"],
    avoid: "Large datasets or repeated searches",
    time: "O(n)",
    space: "O(1)",
    desc: "Scans each element sequentially until the target is found or the list ends."
  },
  'Searching:jump_search': {
    eli5: "Instead of checking every element, jump ahead in fixed blocks. When you overshoot, go back and do a linear search in the last block.",
    pros: ["O(√n) — between linear and binary", "Works with sequential access"],
    cons: ["Requires sorted input", "Worse than binary search"],
    uses: ["Sorted arrays with expensive random access", "Magnetic disks"],
    avoid: "When binary search is available",
    time: "O(√n)",
    space: "O(1)",
    desc: "Jumps ahead by fixed steps, then does a backward linear search in the found block."
  },
  'Searching:interpolation_search': {
    eli5: "Instead of always checking the middle, estimate where the target should be based on its value — like guessing the page of a word in a dictionary.",
    pros: ["O(log log n) for uniform data", "Faster than binary on uniform distributions"],
    cons: ["O(n) worst case on non‑uniform data", "Complex formula"],
    uses: ["Uniformly distributed sorted arrays", "Phone book searches"],
    avoid: "Non‑uniform or small datasets",
    time: "O(log log n) average, O(n) worst",
    space: "O(1)",
    desc: "Improves binary search by estimating the target position using interpolation on the value range."
  },
  'Searching:exponential_search': {
    eli5: "Start from index 1, keep doubling (1, 2, 4, 8, 16…) until you exceed the target. Then run binary search in that range.",
    pros: ["Good for unbounded/infinite arrays", "O(log n) average"],
    cons: ["Requires sorted input", "More complex than binary search"],
    uses: ["Unbounded/infinite sorted arrays", "When range is unknown"],
    avoid: "Bounded arrays where binary search works",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds range by exponential jumps, then performs binary search within that range."
  },
  'Searching:ternary_search': {
    eli5: "Like binary search but splits into three parts instead of two. Check two midpoints to decide which third contains your target.",
    pros: ["Works on unimodal functions", "O(log₃ n)"],
    cons: ["More comparisons per step than binary search", "Not faster overall"],
    uses: ["Finding min/max of unimodal functions", "Optimization problems"],
    avoid: "Standard sorted array searching",
    time: "O(log n)",
    space: "O(1)",
    desc: "Divides the search space into three parts to find a target in a sorted array or min/max of a unimodal function."
  },
  'Searching:find_min_rotate': {
    eli5: "You have a sorted array that was rotated (like [4,5,6,1,2,3]). Find the smallest element. Use a modified binary search that always goes toward the unsorted half.",
    pros: ["O(log n) time", "Elegant binary search variant"],
    cons: ["Only works for rotated sorted arrays"],
    uses: ["Search in rotated arrays", "Data recovery"],
    avoid: "Non‑rotated or unsorted arrays",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds the minimum element in a rotated sorted array by comparing mid with high and adjusting boundaries."
  },
  'Searching:first_occurrence': {
    eli5: "In a sorted array with duplicates, find the first time a target appears. Use binary search but don't stop when you find it — keep going left to see if it appears earlier.",
    pros: ["O(log n)", "Finds leftmost index"],
    cons: ["Requires sorted input"],
    uses: ["Finding range of duplicates", "Counting occurrences"],
    avoid: "When any occurrence is enough",
    time: "O(log n)",
    space: "O(1)",
    desc: "Binary search variant that continues searching in the left half even after finding the target to locate the first occurrence."
  },
  'Searching:last_occurrence': {
    eli5: "In a sorted array with duplicates, find the last time a target appears. Use binary search but when you find it, keep going right.",
    pros: ["O(log n)", "Finds rightmost index"],
    cons: ["Requires sorted input"],
    uses: ["Finding range of duplicates", "Counting occurrences"],
    avoid: "When any occurrence is enough",
    time: "O(log n)",
    space: "O(1)",
    desc: "Binary search variant that continues searching in the right half even after finding the target to locate the last occurrence."
  },
  'Searching:next_greatest_letter': {
    eli5: "Given sorted letters, find the smallest letter that is greater than a target. Like binary search but wrap around if none exists.",
    pros: ["O(log n)", "Classic binary search variation"],
    cons: ["Only for sorted arrays"],
    uses: ["Ceiling queries", "Lexicographic next"],
    avoid: "When you need exact match",
    time: "O(log n)",
    space: "O(1)",
    desc: "Binary search for the smallest element strictly greater than target; if none, return first element (wrap)."
  },
  'Searching:search_insert': {
    eli5: "Find where a target would belong in a sorted array. If it exists, return its index; if not, return the index where it should be inserted.",
    pros: ["O(log n)", "Standard binary search extension"],
    cons: ["Requires sorted array"],
    uses: ["Insert position in sorted list", "Binary search practice"],
    avoid: "Unsorted arrays",
    time: "O(log n)",
    space: "O(1)",
    desc: "Binary search that returns the insertion point (leftmost index where target would fit) when target is not found."
  },
  'Searching:search_range': {
    eli5: "In a sorted array with duplicates, find the first and last index of a target. Run first_occurrence and last_occurrence separately.",
    pros: ["O(log n)", "Returns range efficiently"],
    cons: ["Requires sorted input"],
    uses: ["Range queries", "Counting duplicates"],
    avoid: "Unsorted data",
    time: "O(log n)",
    space: "O(1)",
    desc: "Uses two binary searches to find the leftmost and rightmost occurrence of a target."
  },
  'Searching:search_rotate': {
    eli5: "Search for a target in a rotated sorted array (like [4,5,6,1,2,3]). Use binary search but check which half is normally sorted and decide where to go.",
    pros: ["O(log n)", "Elegant binary search adaptation"],
    cons: ["Only for rotated sorted arrays"],
    uses: ["Search in rotated data", "Circular buffers"],
    avoid: "Non‑rotated arrays",
    time: "O(log n)",
    space: "O(1)",
    desc: "Binary search on a rotated sorted array by determining which half is sorted and checking if the target lies in it."
  },

  // ─── GRAPH ────────────────────────────────────────────────────────────────
  'Graph:dijkstra': {
    eli5: "Finding shortest path in a city map: always visit the nearest unvisited city, update distances to its neighbours, repeat. Greedily picks the shortest path!",
    pros: ["Optimal for non‑negative weights", "O((V+E)log V) with heap"],
    cons: ["Fails with negative edges", "Memory intensive for large graphs"],
    uses: ["GPS navigation", "Network routing", "Game pathfinding"],
    avoid: "Graphs with negative edge weights",
    time: "O((V+E)log V)",
    space: "O(V)",
    desc: "Greedy single‑source shortest path algorithm for graphs with non‑negative edge weights."
  },
  'Graph:bellman_ford': {
    eli5: "Unlike Dijkstra, this relaxes ALL edges V‑1 times. Slower but handles negative weights and detects negative cycles.",
    pros: ["Handles negative edge weights", "Detects negative cycles", "Simpler implementation"],
    cons: ["O(V·E) — slower than Dijkstra", "Not efficient for large sparse graphs"],
    uses: ["Currency arbitrage detection", "Network routing with negative costs"],
    avoid: "Large graphs where Dijkstra suffices",
    time: "O(V·E)",
    space: "O(V)",
    desc: "Computes shortest paths from source by relaxing all edges repeatedly, detecting negative cycles."
  },
  'Graph:a_star': {
    eli5: "Like Dijkstra but smarter: uses a heuristic to guess which direction to explore first. Like GPS using 'roughly how far is my destination' to guide the search.",
    pros: ["Faster than Dijkstra with good heuristic", "Optimal with admissible heuristic"],
    cons: ["Heuristic design is problem‑specific", "High memory usage"],
    uses: ["Game pathfinding", "Robotics", "Puzzle solving (8‑puzzle)"],
    avoid: "When no good heuristic exists",
    time: "O(E)",
    space: "O(V)",
    desc: "Best‑first search using f(n)=g(n)+h(n); combines actual cost and heuristic to find optimal paths efficiently."
  },
  'Graph:traversal': {
    eli5: "Visit every node in a graph. BFS uses a queue (level by level), DFS uses a stack (dive deep first). Both eventually visit all reachable nodes.",
    pros: ["Finds all reachable nodes", "Builds the foundation for most graph algorithms"],
    cons: ["O(V+E) — must visit all nodes", "BFS uses more memory; DFS risks stack overflow"],
    uses: ["Web crawlers", "Social network analysis", "Component detection"],
    avoid: "When you only need one path",
    time: "O(V+E)",
    space: "O(V)",
    desc: "BFS explores nodes level by level using a queue. DFS explores as deep as possible before backtracking."
  },
  'Graph:cycle_detection': {
    eli5: "Walk through the graph. If you visit a node you've already seen in the current path, there's a cycle — like walking in circles!",
    pros: ["Detects cycles in O(V+E)", "Works for directed and undirected graphs"],
    cons: ["Different algorithms for directed vs undirected"],
    uses: ["Deadlock detection", "Build system dependency checking", "Circuit analysis"],
    avoid: "Trees (they can't have cycles by definition)",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Detects cycles in a graph using DFS by tracking currently‑visited nodes in the recursion stack."
  },
  'Graph:topological_sort_bfs': {
    eli5: "In a dependency graph (A must come before B), find an ordering where all dependencies come first. Like ordering tasks in a project!",
    pros: ["Finds valid task ordering", "Detects cycles (no valid ordering exists)"],
    cons: ["Only works on DAGs (no cycles)", "Multiple valid orderings exist"],
    uses: ["Build systems (make, gradle)", "Course prerequisite ordering", "Package managers"],
    avoid: "Graphs with cycles",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Kahn's algorithm: uses in‑degree counts and a queue to produce a topological order of a DAG."
  },
  'Graph:minimum_spanning_tree': {
    eli5: "Connect all cities with roads, using as little total road length as possible. Kruskal's picks the cheapest edges; Prim's grows from a starting node.",
    pros: ["Minimum total edge weight", "No cycles in result"],
    cons: ["Only for connected undirected graphs", "Unique edges required for unique MST"],
    uses: ["Network cable layout", "Circuit design", "Cluster analysis"],
    avoid: "Directed graphs or when not all nodes must connect",
    time: "O(E log E)",
    space: "O(V)",
    desc: "Finds the spanning tree with minimum total edge weight using Kruskal's or Prim's algorithm."
  },
  'Graph:maximum_flow': {
    eli5: "Water flowing through pipes with limited capacity. Find the maximum amount of water that can flow from source to sink.",
    pros: ["Optimal solution", "Multiple algorithms available"],
    cons: ["Complex to implement", "O(V·E²) for Edmonds‑Karp"],
    uses: ["Network bandwidth", "Job assignment", "Baseball elimination problems"],
    avoid: "When flow network structure doesn't apply",
    time: "O(V·E²)",
    space: "O(V+E)",
    desc: "Finds the maximum flow through a flow network from source to sink using augmenting paths."
  },
  'Graph:check_bipartite': {
    eli5: "Color a graph with two colors so that no two adjacent nodes share the same color. If you can, it's bipartite. Like a chessboard pattern.",
    pros: ["O(V+E) BFS/DFS", "Simple concept"],
    cons: ["Only works for undirected graphs"],
    uses: ["Matching problems", "Two‑coloring scheduling", "Detecting odd cycles"],
    avoid: "Directed graphs",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Checks if a graph is bipartite by attempting a 2‑coloring via BFS or DFS."
  },
  'Graph:dijkstra_heapq': {
    eli5: "Same as Dijkstra but using a priority queue (heap) to always pick the closest unvisited node efficiently. The standard implementation.",
    pros: ["O((V+E) log V)", "Optimal for non‑negative weights"],
    cons: ["Requires a priority queue", "Not for negative edges"],
    uses: ["GPS", "Network routing"],
    avoid: "Negative weights",
    time: "O((V+E) log V)",
    space: "O(V)",
    desc: "Dijkstra's algorithm implemented with a min‑heap (priority queue) for efficient extraction of the closest node."
  },
  'Graph:find_path': {
    eli5: "Find any path between two nodes, not necessarily the shortest. Just BFS or DFS until you reach the target.",
    pros: ["Simple", "Works for any graph"],
    cons: ["May return a very long path", "No optimality"],
    uses: ["Connectivity checks", "Maze solving"],
    avoid: "When you need the shortest path",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Uses DFS or BFS to find a path from source to destination; returns first path found."
  },
  'Graph:kahns_algorithm': {
    eli5: "Another name for topological sort using in‑degree counts. Remove nodes with no incoming edges, add them to order, and repeat.",
    pros: ["O(V+E)", "Detects cycles"],
    cons: ["Only for DAGs"],
    uses: ["Task scheduling", "Dependency resolution"],
    avoid: "Cyclic graphs",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Topological sorting algorithm that repeatedly removes nodes with zero in‑degree and updates neighbours."
  },
  'Graph:markov_chain': {
    eli5: "A system where the next state depends only on the current state, not the past. Like a board game where your next move depends only on where you are now.",
    pros: ["Models memoryless processes", "Mathematically tractable"],
    cons: ["Memoryless assumption may be unrealistic"],
    uses: ["PageRank", "Weather prediction", "Text generation"],
    avoid: "When past states matter",
    time: "O(n³) for steady‑state, or O(n) per step",
    space: "O(n²)",
    desc: "A stochastic model describing a sequence of possible events where the probability of each event depends only on the current state."
  },
  'Graph:pacific_atlantic': {
    eli5: "On a 2D grid where heights represent elevation, find cells from which water can flow to both the Pacific (left/top) and Atlantic (right/bottom) oceans. Water flows downhill.",
    pros: ["O(m·n) DFS/BFS", "Interesting multi‑source problem"],
    cons: ["Only for grid graphs"],
    uses: ["Geographic flow simulation", "Interview problem"],
    avoid: "Non‑grid graphs",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Finds all cells that can reach both oceans by performing DFS/BFS from ocean borders and marking reachable cells."
  },
  'Graph:tarjan': {
    eli5: "Finds strongly connected components (SCCs) in a directed graph. Uses DFS and a stack to group nodes that can all reach each other.",
    pros: ["O(V+E) linear", "Finds SCCs"],
    cons: ["Complex to implement", "Recursive stack"],
    uses: ["Compiler optimizations", "Social network analysis", "Circuit analysis"],
    avoid: "Undirected graphs (use union‑find instead)",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Tarjan's algorithm for finding strongly connected components in a directed graph using a single DFS."
  },
  'Graph:topological_sort_dfs': {
    eli5: "Perform DFS on a DAG. When you finish a node, push it onto a stack. The reverse order of finishing times gives a topological order.",
    pros: ["O(V+E)", "Simple DFS extension"],
    cons: ["Only for DAGs", "Recursive stack"],
    uses: ["Task ordering", "Dependency resolution"],
    avoid: "Cyclic graphs",
    time: "O(V+E)",
    space: "O(V)",
    desc: "Topological sort using DFS: after visiting all children, add current node to a stack; popping the stack gives the order."
  },

  // ─── DYNAMIC PROGRAMMING ──────────────────────────────────────────────────
  'Dynamic Programming:fibonacci': {
    eli5: "Instead of recalculating fib(5) over and over in recursion, write answers on sticky notes. fib(10) just looks up fib(9) and fib(8) — already computed!",
    pros: ["Transforms O(2ⁿ) to O(n)", "Core DP pattern — memoization"],
    cons: ["Uses extra O(n) memory", "Iterative solution is even simpler"],
    uses: ["Teaching memoization", "Sequence generation", "Golden ratio approximation"],
    avoid: "When iterative loop suffices",
    time: "O(n)",
    space: "O(n)",
    desc: "Computes Fibonacci numbers using memoization or bottom‑up DP, avoiding redundant recursion."
  },
  'Dynamic Programming:knapsack': {
    eli5: "Your bag fits 5kg. Items have weights and values. What combination gives the most value without exceeding the limit? DP tries all combos efficiently by remembering sub‑answers.",
    pros: ["Guaranteed optimal solution", "Classic DP pattern"],
    cons: ["O(n·W) — slow for large capacities", "Only works for integer weights"],
    uses: ["Resource allocation", "Portfolio optimization", "Ad selection systems"],
    avoid: "Continuous weights or huge capacities",
    time: "O(n·W)",
    space: "O(n·W)",
    desc: "Solves 0/1 knapsack: maximize value of items fitting within a weight limit using a 2D DP table."
  },
  'Dynamic Programming:longest_increasing': {
    eli5: "In the sequence 3,1,4,1,5,9,2,6 — what's the longest subsequence that keeps going up? DP tracks the best ending at each position.",
    pros: ["O(n log n) with patience sorting", "Classic interview problem"],
    cons: ["Only subsequence, not substring"],
    uses: ["Stock price trend analysis", "Sequence analysis in bioinformatics"],
    avoid: "When you need contiguous substring",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Finds the length of the longest strictly increasing subsequence using dynamic programming."
  },
  'Dynamic Programming:coin_change': {
    eli5: "Given coins of value 1, 5, 10 and a target amount, what's the minimum number of coins to make it? DP builds up from amount=0.",
    pros: ["Guaranteed optimal", "Classic DP template"],
    cons: ["O(n·amount) time and space"],
    uses: ["Vending machines", "Currency exchange", "Resource allocation"],
    avoid: "When amount is astronomically large",
    time: "O(n·amount)",
    space: "O(amount)",
    desc: "Finds minimum number of coins to make a target amount using bottom‑up dynamic programming."
  },
  'Dynamic Programming:edit_distance': {
    eli5: "How many insertions, deletions, or substitutions to turn 'kitten' into 'sitting'? DP fills a grid of sub‑problem answers.",
    pros: ["Exact optimal solution", "Works for any string pair"],
    cons: ["O(m·n) time and space"],
    uses: ["Spell checkers", "DNA sequence alignment", "Diff tools"],
    avoid: "Very long strings without approximation",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Computes the Levenshtein distance: minimum edit operations to transform one string into another."
  },
  'Dynamic Programming:max_subarray': {
    eli5: "Find the contiguous sub‑array with the largest sum. Kadane's algorithm: at each step, decide to extend the current sub‑array or start fresh.",
    pros: ["O(n) linear time", "Classic Kadane's algorithm"],
    cons: ["Only contiguous sub‑arrays"],
    uses: ["Stock profit maximization", "Signal processing", "Image analysis"],
    avoid: "Non‑contiguous subset problems",
    time: "O(n)",
    space: "O(1)",
    desc: "Kadane's algorithm: finds the maximum sum contiguous sub‑array in linear time."
  },
  'Dynamic Programming:climbing_stairs': {
    eli5: "You can take 1 or 2 steps at a time. How many ways to reach step n? It's just the Fibonacci sequence! Each step's count = sum of previous two.",
    pros: ["O(n) simple DP", "Teaches DP fundamentals"],
    cons: ["Limited to this specific problem type"],
    uses: ["Teaching DP basics", "Interview warmup"],
    avoid: "When you actually need to climb stairs",
    time: "O(n)",
    space: "O(1)",
    desc: "Counts distinct ways to climb n stairs taking 1 or 2 steps at a time — equivalent to Fibonacci."
  },
  'Dynamic Programming:bitmask': {
    eli5: "Use bits to represent subsets, and DP to solve problems like 'traveling salesman'. Each bit tells whether a city is visited. It's like a memory of which sets you've already considered.",
    pros: ["Handles subset problems elegantly", "Optimizes combinatorial search"],
    cons: ["O(2ⁿ · n) – still exponential", "Limited to n ≤ 20‑25"],
    uses: ["Traveling salesman", "Matching", "Partition problems"],
    avoid: "Large n",
    time: "O(2ⁿ · n)",
    space: "O(2ⁿ)",
    desc: "Dynamic programming with bitmasks to represent states as subsets, often used in combinatorial optimization."
  },
  'Dynamic Programming:buy_sell_stock': {
    eli5: "You have stock prices over days. You can buy and sell (maybe multiple times). DP tracks the best profit if you hold stock or not each day.",
    pros: ["O(n) time", "Handles multiple transactions with cool‑down, fees, etc."],
    cons: ["State machines can be tricky"],
    uses: ["Trading strategies", "Financial analysis"],
    avoid: "When you only need one transaction (simple max diff)",
    time: "O(n)",
    space: "O(1) or O(n)",
    desc: "Dynamic programming for best time to buy and sell stock with various constraints (cooldown, transaction fee, at most k transactions)."
  },
  'Dynamic Programming:combination_sum': {
    eli5: "Given numbers and a target, find all unique combinations that sum to target. DP builds a table of combinations for each smaller sum.",
    pros: ["Finds all combinations", "Classic DP on sums"],
    cons: ["Can be large output", "Need to handle duplicates"],
    uses: ["Coin change (counts vs combinations)", "Subset sum"],
    avoid: "When you only need existence",
    time: "O(target * n)",
    space: "O(target)",
    desc: "DP solution for combination sum (unbounded or bounded) to count or list combinations that sum to target."
  },
  'Dynamic Programming:count_paths_dp': {
    eli5: "Count the number of unique paths from top‑left to bottom‑right in a grid, moving only down or right. DP builds from the finish backwards.",
    pros: ["O(m·n)", "Simple 2D DP"],
    cons: ["Only for grid moves"],
    uses: ["Robot movement", "Combinatorics"],
    avoid: "When obstacles or other moves exist",
    time: "O(m·n)",
    space: "O(m·n) or O(n)",
    desc: "Counts all paths in a grid using DP: dp[i][j] = dp[i-1][j] + dp[i][j-1]."
  },
  'Dynamic Programming:egg_drop': {
    eli5: "You have eggs and a building. Find the highest floor from which eggs don't break, with minimum drops. DP tries every floor as the first drop and takes the worst‑case best.",
    pros: ["Classic DP puzzle", "Optimal solution"],
    cons: ["O(k·n²) naive, O(k·n log n) with optimization"],
    uses: ["Puzzle interviews", "Reliability testing"],
    avoid: "When you have unlimited eggs (binary search)",
    time: "O(k·n)",
    space: "O(k·n)",
    desc: "DP for egg dropping: find minimum number of attempts to determine the critical floor with k eggs and n floors."
  },
  'Dynamic Programming:hosoya_triangle': {
    eli5: "A triangular array of numbers where each number is the sum of the two numbers above it, like Fibonacci's triangle. Used in combinatorics.",
    pros: ["Interesting number pattern", "O(n²) to build"],
    cons: ["Mostly mathematical curiosity"],
    uses: ["Mathematics", "Algorithm demonstrations"],
    avoid: "Practical applications",
    time: "O(n²)",
    space: "O(n²)",
    desc: "Builds Hosoya's triangle (Fibonacci triangle) where each entry is sum of two diagonal predecessors."
  },
  'Dynamic Programming:house_robber': {
    eli5: "You cannot rob two adjacent houses. Find the maximum loot. DP decides at each house: rob it (add loot from two houses ago) or skip it (take previous best).",
    pros: ["O(n) time, O(1) space", "Classic DP"],
    cons: ["Only for linear arrays"],
    uses: ["Security planning", "Resource allocation with constraints"],
    avoid: "When adjacency rules are different",
    time: "O(n)",
    space: "O(1)",
    desc: "DP for maximum sum of non‑adjacent elements in an array (house robber problem)."
  },
  'Dynamic Programming:int_divide': {
    eli5: "Break a number into sum of positive integers. How many ways? DP builds from smaller numbers, like coin change with coins being all numbers ≤ n.",
    pros: ["O(n²)", "Integer partition"],
    cons: ["Exponential growth of output"],
    uses: ["Combinatorics", "Number theory"],
    avoid: "When you need actual partitions (large n)",
    time: "O(n²)",
    space: "O(n)",
    desc: "Counts the number of ways to write an integer as a sum of positive integers (integer partitions) using DP."
  },
  'Dynamic Programming:job_scheduling': {
    eli5: "You have jobs with start, end, profit. Choose non‑overlapping jobs to maximize profit. DP sorts by end time and uses binary search to find last non‑conflicting job.",
    pros: ["O(n log n)", "Optimal scheduling"],
    cons: ["Needs sorting"],
    uses: ["Resource scheduling", "Event planning"],
    avoid: "When jobs have different constraints",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Weighted job scheduling DP: sort jobs by end time, then dp[i] = max(profit[i] + dp[last non‑conflicting], dp[i-1])."
  },
  'Dynamic Programming:k_factor': {
    eli5: "A puzzle about arranging items with at most k consecutive items of the same type. DP tracks endings.",
    pros: ["O(n) DP"],
    cons: ["Very specific"],
    uses: ["Binary strings without k consecutive ones", "Combinatorics"],
    avoid: "General counting",
    time: "O(n)",
    space: "O(n)",
    desc: "Counts binary strings of length n without k consecutive 1's using DP."
  },
  'Dynamic Programming:longest_common_subsequence': {
    eli5: "Find the longest sequence that appears in both strings (not necessarily contiguous). DP builds a table comparing characters.",
    pros: ["O(m·n)", "Classic DP"],
    cons: ["Space O(m·n)"],
    uses: ["Diff tools", "Bioinformatics (DNA)"],
    avoid: "When you need substring",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Computes the longest common subsequence (LCS) using DP table."
  },
  'Dynamic Programming:matrix_chain_order': {
    eli5: "Multiply a chain of matrices. The order affects the number of scalar multiplications. DP finds the parenthesization that minimizes cost.",
    pros: ["O(n³)", "Classic DP on intervals"],
    cons: ["Only for matrix multiplication"],
    uses: ["Optimizing linear algebra", "Compiler optimization"],
    avoid: "When matrices are small",
    time: "O(n³)",
    space: "O(n²)",
    desc: "Matrix chain multiplication DP: finds the most efficient way to multiply a sequence of matrices."
  },
  'Dynamic Programming:max_product_subarray': {
    eli5: "Find the contiguous subarray with maximum product. Unlike sum, product can flip sign. Track both max and min ending at each position.",
    pros: ["O(n)", "Handles negatives"],
    cons: ["Need to track two values"],
    uses: ["Financial products", "Signal processing"],
    avoid: "When subarray sum is enough",
    time: "O(n)",
    space: "O(1)",
    desc: "Kadane‑like algorithm for maximum product subarray, keeping track of both max and min products ending at each index."
  },
  'Dynamic Programming:min_cost_path': {
    eli5: "Find a path from top‑left to bottom‑right in a cost grid, moving only down or right, minimizing total cost. DP builds from start.",
    pros: ["O(m·n)", "Simple"],
    cons: ["Only down/right moves"],
    uses: ["Robot navigation", "Image stitching"],
    avoid: "When diagonal moves allowed",
    time: "O(m·n)",
    space: "O(m·n) or O(n)",
    desc: "DP for minimum cost path in a grid: dp[i][j] = cost[i][j] + min(dp[i-1][j], dp[i][j-1])."
  },
  'Dynamic Programming:num_decodings': {
    eli5: "Given a digit string, count ways to decode it (A=1, B=2, ..., Z=26). DP: one‑digit or two‑digit possibilities.",
    pros: ["O(n)", "Classic DP"],
    cons: ["Edge cases with '0'"],
    uses: ["Message decoding", "Cryptography puzzles"],
    avoid: "When digits can be mapped arbitrarily",
    time: "O(n)",
    space: "O(1)",
    desc: "DP to count ways to decode a string of digits into letters (A=1..Z=26)."
  },
  'Dynamic Programming:planting_trees': {
    eli5: "You have a line of spots, each with a beauty score for each tree type. No two adjacent same type. Maximize total beauty.",
    pros: ["O(n·k²) or better", "Classic DP with adjacency constraint"],
    cons: ["Specific to planting"],
    uses: ["Landscape design", "Resource allocation with adjacency rules"],
    avoid: "When types are many",
    time: "O(n·k²)",
    space: "O(n·k)",
    desc: "DP for planting trees: choose tree types for each spot with no two adjacent same, maximizing sum of scores."
  },
  'Dynamic Programming:regex_matching': {
    eli5: "Check if a string matches a pattern with '.' and '*'. DP builds a table where dp[i][j] means first i chars match first j pattern chars.",
    pros: ["O(m·n)", "Handles wildcards"],
    cons: ["Complex transition rules"],
    uses: ["Regular expression engines", "Input validation"],
    avoid: "Simple patterns (use built‑in)",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "DP for regular expression matching with '.' and '*', supporting zero or more of preceding element."
  },
  'Dynamic Programming:rod_cut': {
    eli5: "You have a rod of length n and prices for each length. Cut it into pieces to maximize revenue. DP tries all first cuts.",
    pros: ["O(n²)", "Classic DP"],
    cons: ["Only for integer lengths"],
    uses: ["Resource cutting", "Steel industry"],
    avoid: "When prices don't follow typical patterns",
    time: "O(n²)",
    space: "O(n)",
    desc: "Rod cutting DP: maximize profit by cutting a rod into pieces of integer lengths with given prices."
  },
  'Dynamic Programming:word_break': {
    eli5: "Given a dictionary, can the string be segmented into dictionary words? DP checks prefixes and sees if they are in dictionary and the rest is segmentable.",
    pros: ["O(n²)", "Classic"],
    cons: ["Dictionary lookup cost"],
    uses: ["Word segmentation", "NLP"],
    avoid: "When dictionary is huge",
    time: "O(n²)",
    space: "O(n)",
    desc: "DP for word break: determine if a string can be segmented into space‑separated dictionary words."
  },

  // ─── TREE ─────────────────────────────────────────────────────────────────
  'Tree:traversal_inorder': {
    eli5: "Visit left child, then current node, then right child. For a Binary Search Tree, this visits nodes in perfectly sorted order — like reading left to right!",
    pros: ["Produces sorted output for BST", "Simple recursion"],
    cons: ["O(h) stack space for deep trees"],
    uses: ["Getting sorted output from BST", "Expression tree evaluation", "BST validation"],
    avoid: "When level‑order (BFS) traversal is needed",
    time: "O(n)",
    space: "O(h)",
    desc: "Recursively visits left subtree → root → right subtree. Produces sorted order for BSTs."
  },
  'Tree:traversal_level_order': {
    eli5: "Visit all nodes floor by floor — all root's children first, then their children. Uses a queue to track who's next.",
    pros: ["Finds shortest path in unweighted trees", "Intuitive level‑by‑level view"],
    cons: ["O(w) memory where w = max width"],
    uses: ["Finding minimum depth", "Serializing trees", "Level‑by‑level processing"],
    avoid: "Deep narrow trees (DFS is better)",
    time: "O(n)",
    space: "O(w)",
    desc: "BFS‑based traversal visiting nodes level by level using a queue."
  },
  'Tree:traversal_preorder': {
    eli5: "Visit the current node first, then left, then right. Great for copying or printing the tree structure from top to bottom.",
    pros: ["Good for tree serialization", "Simple recursion"],
    cons: ["Not sorted output"],
    uses: ["Tree serialization", "Directory listing", "Expression prefix notation"],
    avoid: "When sorted output is needed",
    time: "O(n)",
    space: "O(h)",
    desc: "Recursively visits root → left → right. Used for tree serialization and copying."
  },
  'Tree:traversal_postorder': {
    eli5: "Visit left child, then right child, then the current node. Like cleaning up — children before parents. Perfect for deleting trees or evaluating expressions.",
    pros: ["Correct order for deleting trees", "Expression evaluation"],
    cons: ["Less intuitive", "Not sorted"],
    uses: ["Deleting trees", "Postfix expression evaluation", "Directory size calculation"],
    avoid: "When pre/in‑order is needed",
    time: "O(n)",
    space: "O(h)",
    desc: "Recursively visits left → right → root. Used for deletion and postfix expression evaluation."
  },
  'Tree:invert_tree': {
    eli5: "Swap every left and right child in the entire tree. The mirror image of the original tree!",
    pros: ["O(n) — visits every node once", "Clean recursive solution"],
    cons: ["Modifies tree in place"],
    uses: ["Mirroring data structures", "Symmetry checking", "Interview classic"],
    avoid: "When original tree must be preserved",
    time: "O(n)",
    space: "O(h)",
    desc: "Recursively swaps the left and right children of every node to produce the mirror image of the tree."
  },
  'Tree:max_height': {
    eli5: "How many floors does the tree have? Recursively find the height of left and right subtrees, return the bigger one plus one for the current node.",
    pros: ["Simple O(n) recursion", "Foundation for many tree algorithms"],
    cons: ["Recursive — O(h) stack for deep trees"],
    uses: ["Balancing checks", "Tree analysis"],
    avoid: "Extremely deep unbalanced trees (stack overflow)",
    time: "O(n)",
    space: "O(h)",
    desc: "Recursively computes tree height as 1 + max(left_height, right_height)."
  },
  'Tree:is_balanced': {
    eli5: "A tree is balanced if left and right subtrees differ in height by at most 1, for every node. Check recursively!",
    pros: ["O(n) with height caching", "Important property for BST performance"],
    cons: ["Multiple definitions of 'balanced'"],
    uses: ["AVL tree validation", "Performance analysis", "Rebalancing triggers"],
    avoid: "When approximate balance suffices",
    time: "O(n)",
    space: "O(h)",
    desc: "Checks if every node's left and right subtree heights differ by at most 1."
  },
  'Tree:bin_tree_to_list': {
    eli5: "Flatten a binary tree into a linked list in place, following a pre‑order order. Rearrange pointers so right points to next node, left becomes null.",
    pros: ["O(n)", "In‑place"],
    cons: ["Modifies tree", "Can be tricky"],
    uses: ["Tree serialization", "Converting to list"],
    avoid: "When tree must remain intact",
    time: "O(n)",
    space: "O(h)",
    desc: "Flattens a binary tree to a linked list using pre‑order traversal, adjusting right pointers."
  },
  'Tree:binary_tree_paths': {
    eli5: "Find all root‑to‑leaf paths and return them as strings. DFS and build the path as you go.",
    pros: ["O(n)", "Simple recursion"],
    cons: ["Output size O(n log n) for strings"],
    uses: ["Reporting paths", "Tree analysis"],
    avoid: "When you need only count",
    time: "O(n)",
    space: "O(h) stack + O(paths) output",
    desc: "DFS to collect all root‑to‑leaf paths in a binary tree."
  },
  'Tree:bst_closest_value': {
    eli5: "In a BST, find the value closest to a given target. Walk down the tree, updating the closest candidate each time.",
    pros: ["O(h) time", "Simple"],
    cons: ["Only for BST"],
    uses: ["Nearest neighbor search", "Range queries"],
    avoid: "Non‑BST trees",
    time: "O(h)",
    space: "O(1)",
    desc: "Traverses a BST to find the node with value closest to a target."
  },
  'Tree:bst_delete_node': {
    eli5: "Delete a node from a BST. Three cases: leaf (just remove), one child (replace with child), two children (find inorder successor, copy value, delete successor).",
    pros: ["O(h)", "Maintains BST property"],
    cons: ["Complex implementation", "Successor handling"],
    uses: ["Database indexes", "Dynamic sets"],
    avoid: "When tree is highly unbalanced",
    time: "O(h)",
    space: "O(h)",
    desc: "Deletes a node from a BST while preserving the binary search tree property."
  },
  'Tree:bst_height': {
    eli5: "Height of a BST is the same as tree height: max depth from root to leaf. Same as max_height, just on a BST.",
    pros: ["O(n)", "Simple recursion"],
    cons: ["BST property not used"],
    uses: ["Balance checks", "Performance"],
    avoid: "When you need other metrics",
    time: "O(n)",
    space: "O(h)",
    desc: "Computes the height of a BST (same as any binary tree)."
  },
  'Tree:bst_is_bst': {
    eli5: "Check if a binary tree is a valid BST. Use range validation: each node must be within a (min, max) interval inherited from ancestors.",
    pros: ["O(n)", "In‑order traversal also works"],
    cons: ["Need to handle min/max bounds"],
    uses: ["Validation", "Tree construction"],
    avoid: "When tree is guaranteed BST",
    time: "O(n)",
    space: "O(h)",
    desc: "Validates that a binary tree satisfies BST property (left < node < right) using recursive range checks."
  },
  'Tree:bst_iterator': {
    eli5: "Iterate over a BST in sorted order without using recursion. Use a stack to simulate in‑order traversal, pushing all left nodes first.",
    pros: ["O(1) average next()", "O(h) memory"],
    cons: ["Implementation care"],
    uses: ["Database cursors", "Streaming sorted data"],
    avoid: "When you can just traverse",
    time: "O(1) amortized next()",
    space: "O(h)",
    desc: "BST iterator that performs in‑order traversal using an explicit stack."
  },
  'Tree:bst_kth_smallest': {
    eli5: "Find the kth smallest element in a BST. In‑order traversal gives sorted order; stop at the kth element.",
    pros: ["O(k + h)", "Can augment with subtree sizes for O(log n)"],
    cons: ["Naive O(n)"],
    uses: ["Order statistics", "Database queries"],
    avoid: "When tree is not BST",
    time: "O(k + h)",
    space: "O(h)",
    desc: "Finds the kth smallest element in a BST via in‑order traversal or using subtree size counts."
  },
  'Tree:bst_lowest_common_ancestor': {
    eli5: "In a BST, find the lowest common ancestor of two nodes. Start from root, if both are smaller go left, both larger go right, else current is LCA.",
    pros: ["O(h)", "Very simple"],
    cons: ["Only for BST"],
    uses: ["Genealogy", "Routing"],
    avoid: "Non‑BST trees",
    time: "O(h)",
    space: "O(1)",
    desc: "Finds the lowest common ancestor of two nodes in a BST by leveraging the BST property."
  },
  'Tree:deepest_left': {
    eli5: "Find the deepest left leaf in a binary tree. BFS or DFS tracking depth and whether node is a left child.",
    pros: ["O(n)", "Simple"],
    cons: ["Specific"],
    uses: ["Tree analysis", "Interview"],
    avoid: "When you need deepest node regardless",
    time: "O(n)",
    space: "O(n) BFS queue",
    desc: "Finds the deepest leaf that is a left child in a binary tree."
  },
  'Tree:is_subtree': {
    eli5: "Check if tree B is a subtree of tree A. Use serialization or recursion: check if trees are identical at any node.",
    pros: ["O(n·m) naive, O(n+m) with serialization"],
    cons: ["Serialization may need sentinels"],
    uses: ["Tree matching", "Code clone detection"],
    avoid: "When trees are huge",
    time: "O(n·m)",
    space: "O(n+m)",
    desc: "Determines if one tree is a subtree of another by checking for identical structure at any node."
  },
  'Tree:is_symmetric': {
    eli5: "Check if a tree is a mirror of itself around its center. Compare left and right subtrees recursively: left.left with right.right, left.right with right.left.",
    pros: ["O(n)", "Recursive"],
    cons: ["Only for binary trees"],
    uses: ["Tree property checks", "Interview"],
    avoid: "When tree is not binary",
    time: "O(n)",
    space: "O(h)",
    desc: "Checks if a binary tree is symmetric (a mirror of itself)."
  },
  'Tree:lowest_common_ancestor': {
    eli5: "In any binary tree (not necessarily BST), find the lowest common ancestor of two nodes. Use recursion: if node is null or matches, return node; then check left/right.",
    pros: ["O(n)", "Works for any binary tree"],
    cons: ["Assumes nodes exist"],
    uses: ["Genealogy", "File system paths"],
    avoid: "When tree is BST (use simpler method)",
    time: "O(n)",
    space: "O(h)",
    desc: "Finds the lowest common ancestor in a binary tree using recursive post‑order traversal."
  },
  'Tree:max_path_sum': {
    eli5: "Find the maximum sum along any path in a binary tree (path may start and end at any node). Recursively compute max single‑path through each node, update global max.",
    pros: ["O(n)", "Classic tree DP"],
    cons: ["Path can be any, not necessarily root‑to‑leaf"],
    uses: ["Tree analysis", "Financial networks"],
    avoid: "When you need root‑to‑leaf sum",
    time: "O(n)",
    space: "O(h)",
    desc: "Finds the maximum path sum in a binary tree where the path can start and end at any node."
  },
  'Tree:min_height': {
    eli5: "Find the minimum depth from root to a leaf. BFS finds the first leaf, DFS computes min of children.",
    pros: ["O(n)", "BFS faster for shallow trees"],
    cons: ["BFS uses more memory"],
    uses: ["Early exit conditions", "Tree analysis"],
    avoid: "When you need height",
    time: "O(n)",
    space: "O(n) BFS, O(h) DFS",
    desc: "Computes the minimum depth (distance to nearest leaf) of a binary tree."
  },
  'Tree:path_sum': {
    eli5: "Check if there is a root‑to‑leaf path that sums to a given target. DFS subtracts node value from target as you go.",
    pros: ["O(n)", "Simple"],
    cons: ["Only root‑to‑leaf"],
    uses: ["Path finding", "Sum constraints"],
    avoid: "When path can start/end anywhere",
    time: "O(n)",
    space: "O(h)",
    desc: "Determines if a binary tree has a root‑to‑leaf path with a given sum."
  },
  'Tree:same_tree': {
    eli5: "Check if two trees are structurally identical and have same node values. Recursively compare root, then left and right.",
    pros: ["O(n)", "Trivial recursion"],
    cons: ["None"],
    uses: ["Equality checks", "Tree comparison"],
    avoid: "When trees are huge (but still O(n))",
    time: "O(n)",
    space: "O(h)",
    desc: "Checks if two binary trees are identical."
  },
  'Tree:traversal_zigzag': {
    eli5: "Level‑order but alternating direction each level: left‑to‑right, then right‑to‑left, etc. Use a deque or two stacks.",
    pros: ["O(n)", "Interesting variation"],
    cons: ["Slightly more complex"],
    uses: ["Spiral printing", "Interview"],
    avoid: "When simple level order suffices",
    time: "O(n)",
    space: "O(w)",
    desc: "Zigzag level order traversal: alternate between left‑to‑right and right‑to‑left at each level."
  },
  'Tree:trie_add_and_search': {
    eli5: "A trie is like a tree of letters. To add a word, walk down the tree creating nodes. To search, follow the letters. Great for prefix searches.",
    pros: ["O(L) per operation", "Fast prefix queries"],
    cons: ["Memory overhead per node"],
    uses: ["Autocomplete", "Spell checker", "IP routing"],
    avoid: "When dictionary is small (hash table may be better)",
    time: "O(L)",
    space: "O(alphabet * total chars)",
    desc: "Trie data structure supporting insertion and search (including prefix search)."
  },

  // ─── LINKED LIST ──────────────────────────────────────────────────────────
  'Linked List:reverse': {
    eli5: "Walk through the chain, and for each node, flip its arrow to point backward instead of forward. Use three pointers: prev, curr, next.",
    pros: ["O(n) time, O(1) space", "Classic pointer manipulation"],
    cons: ["Modifies original list", "Easy to get pointer order wrong"],
    uses: ["Palindrome checks", "Undo operations", "List manipulation algorithms"],
    avoid: "Arrays (just use two‑pointer in place)",
    time: "O(n)",
    space: "O(1)",
    desc: "Iteratively reverses a singly linked list by redirecting next pointers from head to tail."
  },
  'Linked List:is_cyclic': {
    eli5: "Use two pointers — a slow one (moves 1 step) and a fast one (moves 2 steps). If there's a cycle, fast catches up to slow. Like a rabbit catching a tortoise running in a loop!",
    pros: ["O(n) time, O(1) space", "Elegant Floyd's algorithm"],
    cons: ["Only detects cycles, doesn't find cycle start without extra steps"],
    uses: ["Linked list validation", "Deadlock detection", "Detecting infinite loops"],
    avoid: "When you also need cycle length",
    time: "O(n)",
    space: "O(1)",
    desc: "Floyd's cycle detection: uses slow and fast pointers — if they meet, a cycle exists."
  },
  'Linked List:merge_two_list': {
    eli5: "Given two sorted chains, merge them into one sorted chain. Compare the fronts, pick the smaller, advance that pointer. Like merging two sorted card hands.",
    pros: ["O(n+m) time, O(1) space", "Stable merge"],
    cons: ["Modifies original lists"],
    uses: ["Merge sort for linked lists", "Combining sorted streams"],
    avoid: "Random‑access structures",
    time: "O(n+m)",
    space: "O(1)",
    desc: "Merges two sorted linked lists by comparing head nodes and linking the smaller one each step."
  },
  'Linked List:add_two_numbers': {
    eli5: "Two numbers are stored as linked lists in reverse order (digits). Add them digit by digit, carrying over, producing a new list.",
    pros: ["O(max(n,m))", "Classic"],
    cons: ["Input lists reversed"],
    uses: ["Big integer arithmetic", "Interview"],
    avoid: "When numbers are not reversed",
    time: "O(max(n,m))",
    space: "O(max(n,m))",
    desc: "Adds two numbers represented as linked lists (each node a digit, stored in reverse order)."
  },
  'Linked List:copy_random_pointer': {
    eli5: "You have a linked list where each node has an extra random pointer. Make a deep copy. Interweave original and copy, then separate.",
    pros: ["O(n) time, O(1) extra space (besides copy)", "Elegant"],
    cons: ["Three passes, careful pointer work"],
    uses: ["Data structure cloning", "Interview"],
    avoid: "When you can use a hash map (simpler)",
    time: "O(n)",
    space: "O(1)",
    desc: "Deep copy a linked list with random pointers using interleaving technique."
  },
  'Linked List:delete_node': {
    eli5: "Delete a node given only access to that node (no head). Copy next node's data into current, then delete next. Works except for tail.",
    pros: ["O(1) time", "Tricky but useful"],
    cons: ["Cannot delete last node"],
    uses: ["Given only node reference", "Interview trick"],
    avoid: "When you have head (simpler)",
    time: "O(1)",
    space: "O(1)",
    desc: "Deletes a node from a singly linked list when only that node is given, by copying next node's data."
  },
  'Linked List:first_cyclic_node': {
    eli5: "Find the node where the cycle begins. After Floyd's algorithm finds a meeting point, move one pointer to head and step both one step until they meet again.",
    pros: ["O(n) time, O(1) space", "Finds cycle start"],
    cons: ["Requires cycle detection first"],
    uses: ["Cycle analysis", "Debugging"],
    avoid: "No cycle",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the first node of a cycle in a linked list using Floyd's algorithm and then finding the cycle start."
  },
  'Linked List:intersection': {
    eli5: "Find the node where two linked lists intersect (they merge). Calculate lengths, advance the longer list by the difference, then step together.",
    pros: ["O(n+m) time, O(1) space", "Simple"],
    cons: ["Assumes no cycles"],
    uses: ["Finding common suffix", "Y‑shaped lists"],
    avoid: "When lists may have cycles",
    time: "O(n+m)",
    space: "O(1)",
    desc: "Finds the intersection node of two singly linked lists (if any) by aligning tails."
  },
  'Linked List:is_palindrome': {
    eli5: "Check if a linked list is a palindrome. Find middle, reverse second half, compare with first half, then restore (optional).",
    pros: ["O(n) time, O(1) space", "Classic"],
    cons: ["Modifies list temporarily"],
    uses: ["Palindrome verification", "Interview"],
    avoid: "When you can't modify list",
    time: "O(n)",
    space: "O(1)",
    desc: "Determines if a singly linked list is a palindrome by reversing the second half and comparing."
  },
  'Linked List:is_sorted': {
    eli5: "Check if a linked list is sorted (non‑decreasing). Traverse and ensure each node's value ≤ next node's value.",
    pros: ["O(n) time, O(1) space", "Trivial"],
    cons: ["None"],
    uses: ["Validation", "Pre‑condition"],
    avoid: "Never",
    time: "O(n)",
    space: "O(1)",
    desc: "Checks if a linked list is sorted in non‑decreasing order."
  },
  'Linked List:kth_to_last': {
    eli5: "Find the kth node from the end. Use two pointers: first move one k steps ahead, then move both until the first reaches end.",
    pros: ["O(n) time, O(1) space", "One pass"],
    cons: ["k must be ≤ length"],
    uses: ["Finding tail elements", "Sliding window"],
    avoid: "When you know length (simpler)",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the kth‑to‑last element in a singly linked list using two pointers."
  },
  'Linked List:partition': {
    eli5: "Partition a linked list around a value x: all nodes < x come before nodes ≥ x, preserving original order. Use two dummy heads to collect.",
    pros: ["O(n) time, O(1) space", "Stable"],
    cons: ["Pointer manipulation"],
    uses: ["Quicksort partitioning", "Filtering"],
    avoid: "When order doesn't matter",
    time: "O(n)",
    space: "O(1)",
    desc: "Partitions a linked list so that nodes less than x appear before nodes greater or equal to x."
  },
  'Linked List:remove_duplicates': {
    eli5: "Remove duplicates from an unsorted linked list. Use a hash set to track seen values. For sorted list, just compare with previous.",
    pros: ["O(n) with hash set", "Simple"],
    cons: ["Hash set uses O(n) extra space"],
    uses: ["Data cleaning", "Set operations"],
    avoid: "When you need O(1) space (sort first)",
    time: "O(n)",
    space: "O(n)",
    desc: "Removes duplicate nodes from a linked list, typically using a hash set."
  },
  'Linked List:remove_range': {
    eli5: "Remove all nodes with values in a given range [min, max]. Traverse and skip those nodes.",
    pros: ["O(n)", "Simple"],
    cons: ["Only for sorted lists? Actually works for any"],
    uses: ["Filtering", "Range deletion"],
    avoid: "When you need to keep range",
    time: "O(n)",
    space: "O(1)",
    desc: "Removes all nodes from a linked list whose values fall within a specified range."
  },
  'Linked List:rotate_list': {
    eli5: "Rotate the list to the right by k places. Find the new tail (len - k%len - 1), break there, and attach head to old tail.",
    pros: ["O(n) time, O(1) space", "Classic"],
    cons: ["k can be large, use modulo"],
    uses: ["Circular buffer", "List rotation"],
    avoid: "When you can just compute index",
    time: "O(n)",
    space: "O(1)",
    desc: "Rotates a linked list to the right by k positions."
  },
  'Linked List:swap_in_pairs': {
    eli5: "Swap every two adjacent nodes (1‑2, 3‑4, ...). Use recursion or iteration with careful pointer updates.",
    pros: ["O(n)", "Classic"],
    cons: ["Pointer handling"],
    uses: ["List reordering", "Interview"],
    avoid: "When you need to swap values (simpler)",
    time: "O(n)",
    space: "O(1)",
    desc: "Swaps every two adjacent nodes in a linked list."
  },

  // ─── STACK ────────────────────────────────────────────────────────────────
  'Stack:valid_parenthesis': {
    eli5: "Use a stack. When you see an opening bracket, push it. When you see a closing bracket, check the top of the stack matches. If not, it's invalid!",
    pros: ["O(n) time and space", "Classic stack application"],
    cons: ["Only for bracket matching"],
    uses: ["Code editors — syntax highlighting", "Expression parsing", "Compiler design"],
    avoid: "Non‑bracket validation problems",
    time: "O(n)",
    space: "O(n)",
    desc: "Uses a stack to verify that every opening bracket has a matching closing bracket in the correct order."
  },
  'Stack:is_sorted': {
    eli5: "Use a helper stack to check if the main stack is sorted. Transfer elements while maintaining order — if we ever need to put an element out of order, it's unsorted.",
    pros: ["O(n) check", "Elegant stack usage"],
    cons: ["O(n) extra space"],
    uses: ["Stack validation", "Data structure integrity checks"],
    avoid: "Arrays where a simple loop suffices",
    time: "O(n)",
    space: "O(n)",
    desc: "Checks if a stack is sorted by transferring elements to a helper stack while verifying order."
  },
  'Stack:is_consecutive': {
    eli5: "Check if a stack contains consecutive pairs (like 1,2,3,...). Use a helper stack to reverse and compare.",
    pros: ["O(n)", "Stack exercise"],
    cons: ["Limited use"],
    uses: ["Pattern checking", "Interview"],
    avoid: "When you just need to check sequence",
    time: "O(n)",
    space: "O(n)",
    desc: "Checks if a stack contains consecutive integers (e.g., 1,2,3,4) in some order."
  },
  'Stack:longest_abs_path': {
    eli5: "Given a filesystem string with \\n and \\t, find the length of the longest absolute path to a file. Use a stack to track directory lengths.",
    pros: ["O(n)", "Clever stack use"],
    cons: ["Parsing complexity"],
    uses: ["File system analysis", "String parsing"],
    avoid: "When file system is given as tree",
    time: "O(n)",
    space: "O(depth)",
    desc: "Finds the longest absolute file path in a string representation of a file system."
  },
  'Stack:ordered_stack': {
    eli5: "Sort a stack using only another stack. Pop elements from original, insert into helper in sorted order (like insertion sort).",
    pros: ["O(n²) but simple", "Only stack operations"],
    cons: ["Slow", "Limited"],
    uses: ["Stack sorting", "Interview"],
    avoid: "When you have arrays",
    time: "O(n²)",
    space: "O(n)",
    desc: "Sorts a stack using an auxiliary stack, leveraging only push/pop."
  },
  'Stack:remove_min': {
    eli5: "Remove the minimum element from a stack, leaving the rest in original order. Use a temporary stack to hold larger elements.",
    pros: ["O(n)", "Stack manipulation"],
    cons: ["Modifies stack"],
    uses: ["Min extraction", "Interview"],
    avoid: "When you need a min‑stack (constant time)",
    time: "O(n)",
    space: "O(n)",
    desc: "Removes the smallest element from a stack while preserving order of remaining elements."
  },
  'Stack:simplify_path': {
    eli5: "Given a Unix path like '/a/./b/../c', simplify it (resolve .. and .). Use a stack to push directory names, pop on '..'.",
    pros: ["O(n)", "Classic"],
    cons: ["Handles edge cases"],
    uses: ["File path canonicalization", "URL simplification"],
    avoid: "When path is already simple",
    time: "O(n)",
    space: "O(n)",
    desc: "Simplifies an absolute file path by processing '.' and '..' using a stack."
  },
  'Stack:stutter': {
    eli5: "Replace each element in a stack with two copies. Use a temporary stack to reverse and duplicate.",
    pros: ["O(n)", "Stack exercise"],
    cons: ["Simple"],
    uses: ["Stack transformations", "Interview"],
    avoid: "When you can just use list",
    time: "O(n)",
    space: "O(n)",
    desc: "Duplicates each element in a stack so that every element appears twice consecutively."
  },
  'Stack:switch_pairs': {
    eli5: "Swap every pair of elements in a stack (top two, next two, ...). Use a queue or temporary stack to reorder.",
    pros: ["O(n)", "Stack/queue combo"],
    cons: ["If odd number, last stays"],
    uses: ["Reordering", "Interview"],
    avoid: "When you need simple swap",
    time: "O(n)",
    space: "O(n)",
    desc: "Swaps consecutive pairs of elements in a stack."
  },

  // ─── STRING ───────────────────────────────────────────────────────────────
  'String:knuth_morris_pratt': {
    eli5: "Search for a word inside text without backtracking. Build a 'failure function' table that tells you how far to skip when a mismatch happens.",
    pros: ["O(n+m) linear time", "No backtracking in text"],
    cons: ["Preprocessing required for pattern", "Complex failure function"],
    uses: ["Text editors (Ctrl+F)", "DNA pattern matching", "Log file searching"],
    avoid: "Single short searches (indexOf is fine)",
    time: "O(n+m)",
    space: "O(m)",
    desc: "Linear‑time string pattern search using a failure function to avoid redundant character comparisons."
  },
  'String:rabin_karp': {
    eli5: "Compute a hash of your search pattern. Slide a window through the text and compare hashes — only do a full comparison when hashes match!",
    pros: ["O(n+m) average", "Finds multiple patterns simultaneously"],
    cons: ["O(n·m) worst case with many hash collisions", "Requires good hash function"],
    uses: ["Plagiarism detection", "Multiple pattern search", "Bioinformatics"],
    avoid: "Single pattern search (KMP is better)",
    time: "O(n+m) average, O(n·m) worst",
    space: "O(1)",
    desc: "Uses rolling hash to compare pattern and text substrings efficiently without full character comparison."
  },
  'String:is_palindrome': {
    eli5: "Check if a string reads the same forward and backward. Use two pointers: one from start, one from end, move toward the middle.",
    pros: ["O(n) time, O(1) space", "Simple two‑pointer approach"],
    cons: ["Need to handle case and non‑alpha chars for real words"],
    uses: ["Input validation", "Bioinformatics", "Interview classic"],
    avoid: "Nothing — it's always simple",
    time: "O(n)",
    space: "O(1)",
    desc: "Uses two pointers from both ends, checking if characters match, moving inward until they meet."
  },
  'String:add_binary': {
    eli5: "Add two binary strings like '11' + '1' = '100'. Do it digit by digit from right to left, carrying over.",
    pros: ["O(n)", "Simple"],
    cons: ["Only binary"],
    uses: ["Binary arithmetic", "Interview"],
    avoid: "When you can convert to int (overflow risk)",
    time: "O(n)",
    space: "O(n)",
    desc: "Adds two binary strings and returns the sum as a binary string."
  },
  'String:atbash_cipher': {
    eli5: "A simple cipher that reverses the alphabet: A↔Z, B↔Y, etc. Map each letter to its mirror.",
    pros: ["O(n)", "Trivial"],
    cons: ["Not secure"],
    uses: ["Puzzles", "Ancient cryptography"],
    avoid: "Any real security",
    time: "O(n)",
    space: "O(n)",
    desc: "Atbash cipher: replace each letter with its reverse in the alphabet (A↔Z, B↔Y, etc.)."
  },
  'String:breaking_bad': {
    eli5: "Given a string and a dictionary, find all ways to break the string into dictionary words (like 'breakingbad' → 'breaking bad'). Backtracking/DP.",
    pros: ["O(2ⁿ) worst", "Word break variant"],
    cons: ["Exponential"],
    uses: ["Word segmentation", "NLP"],
    avoid: "Long strings",
    time: "O(2ⁿ)",
    space: "O(n)",
    desc: "Finds all possible word breaks of a string using a dictionary (word break II)."
  },
  'String:caesar_cipher': {
    eli5: "Shift each letter by a fixed number (e.g., shift 3: A→D). Julius Caesar used it.",
    pros: ["O(n)", "Simple"],
    cons: ["Easily broken"],
    uses: ["Puzzles", "Education"],
    avoid: "Real encryption",
    time: "O(n)",
    space: "O(n)",
    desc: "Caesar cipher encryption/decryption: shift letters by a fixed amount."
  },
  'String:check_pangram': {
    eli5: "Check if a sentence contains every letter of the alphabet at least once. Use a set or boolean array.",
    pros: ["O(n)", "Simple"],
    cons: ["Case insensitive"],
    uses: ["Pangram detection", "Word games"],
    avoid: "Never",
    time: "O(n)",
    space: "O(1)",
    desc: "Determines if a string is a pangram (contains all letters of the alphabet)."
  },
  'String:count_binary_substring': {
    eli5: "Count substrings that have equal number of 0s and 1s, and all 0s and 1s are consecutive. Group consecutive counts and sum mins.",
    pros: ["O(n)", "Clever"],
    cons: ["Specific"],
    uses: ["Binary string analysis", "Interview"],
    avoid: "When substrings can be non‑consecutive",
    time: "O(n)",
    space: "O(1)",
    desc: "Counts substrings with equal number of consecutive 0s and 1s (like '01','10','0011','1100')."
  },
  'String:decode_string': {
    eli5: "Decode a string like '3[a2[c]]' → 'accaccacc'. Use stack to handle nested repetitions.",
    pros: ["O(n)", "Stack usage"],
    cons: ["Parsing complexity"],
    uses: ["String decompression", "Interview"],
    avoid: "When no encoding",
    time: "O(n)",
    space: "O(n)",
    desc: "Decodes a string encoded with k[encoded_string] pattern using a stack."
  },
  'String:first_unique_char': {
    eli5: "Find the first non‑repeating character in a string. Count frequencies, then scan to find first with count 1.",
    pros: ["O(n)", "Simple"],
    cons: ["Two passes"],
    uses: ["Character analysis", "Stream processing"],
    avoid: "When you need all unique",
    time: "O(n)",
    space: "O(1) (fixed alphabet)",
    desc: "Returns the index of the first unique character in a string."
  },
  'String:fizzbuzz': {
    eli5: "Print numbers 1 to n, but for multiples of 3 print 'Fizz', for 5 'Buzz', for both 'FizzBuzz'. A classic.",
    pros: ["O(n)", "Trivial"],
    cons: ["None"],
    uses: ["Interview warm‑up", "Teaching modulo"],
    avoid: "When you need actual numbers",
    time: "O(n)",
    space: "O(n) output",
    desc: "FizzBuzz: classic programming problem."
  },
  'String:group_anagrams': {
    eli5: "Group words that are anagrams (same letters different order). Sort each word, use sorted version as key in hash map.",
    pros: ["O(n·k log k) where k is max length", "Efficient"],
    cons: ["Sorting each word"],
    uses: ["Anagram detection", "Data clustering"],
    avoid: "When words are very long",
    time: "O(n·k log k)",
    space: "O(n·k)",
    desc: "Groups anagrams from a list of strings using sorted strings as keys."
  },
  'String:int_to_roman': {
    eli5: "Convert an integer to a Roman numeral. Use greedy mapping from largest to smallest values.",
    pros: ["O(1) (limited symbols)", "Simple"],
    cons: ["Only up to 3999"],
    uses: ["Roman numeral conversion", "Interview"],
    avoid: "Large numbers",
    time: "O(1)",
    space: "O(1)",
    desc: "Converts an integer (1‑3999) to a Roman numeral."
  },
  'String:is_rotated': {
    eli5: "Check if one string is a rotation of another (e.g., 'waterbottle' is rotation of 'erbottlewat'). Concatenate first with itself and check if second is substring.",
    pros: ["O(n)", "Clever"],
    cons: ["Uses extra space"],
    uses: ["String rotation check", "Interview"],
    avoid: "When you can't concatenate",
    time: "O(n)",
    space: "O(n)",
    desc: "Checks if one string is a rotation of another by concatenating the first with itself and using substring search."
  },
  'String:judge_circle': {
    eli5: "A robot moves U/D/L/R. Determine if it returns to start. Count U‑D and L‑R; if both zero, it's a circle.",
    pros: ["O(n)", "Simple"],
    cons: ["Only cardinal directions"],
    uses: ["Robot movement", "Interview"],
    avoid: "When movement has obstacles",
    time: "O(n)",
    space: "O(1)",
    desc: "Checks if a sequence of moves (U,D,L,R) brings the robot back to origin."
  },
  'String:longest_common_prefix': {
    eli5: "Find the longest common prefix among an array of strings. Compare character by character across all strings.",
    pros: ["O(n·m)", "Simple"],
    cons: ["Linear in total characters"],
    uses: ["String comparison", "Auto‑complete"],
    avoid: "When strings are very long",
    time: "O(S) where S = total chars",
    space: "O(1)",
    desc: "Finds the longest common prefix of an array of strings."
  },
  'String:longest_palindromic_substring': {
    eli5: "Find the longest palindrome inside a string. Expand around center (odd/even) for each position.",
    pros: ["O(n²) simple, O(n) with Manacher"],
    cons: ["O(n²) may be slow for long strings"],
    uses: ["Text analysis", "Bioinformatics"],
    avoid: "When you need all palindromes",
    time: "O(n²) or O(n)",
    space: "O(1) or O(n)",
    desc: "Finds the longest palindromic substring using expand‑around‑center or Manacher's algorithm."
  },
  'String:manacher': {
    eli5: "Find the longest palindromic substring in linear time. It cleverly reuses previously computed palindrome radii to avoid re‑checks.",
    pros: ["O(n) linear", "Optimal"],
    cons: ["Complex to implement", "Hard to understand"],
    uses: ["Fast palindrome search", "Bioinformatics"],
    avoid: "When n is small (simple expand is fine)",
    time: "O(n)",
    space: "O(n)",
    desc: "Manacher's algorithm finds all palindromic substrings in linear time."
  },
  'String:multiply_strings': {
    eli5: "Multiply two numbers given as strings (like '123' * '45'). Simulate manual multiplication digit by digit.",
    pros: ["O(n·m)", "No integer overflow"],
    cons: ["Handles carries"],
    uses: ["Big integer multiplication", "Interview"],
    avoid: "When you can use BigInt",
    time: "O(n·m)",
    space: "O(n+m)",
    desc: "Multiplies two non‑negative integers represented as strings and returns the product as a string."
  },
  'String:one_edit_distance': {
    eli5: "Check if two strings are one edit (insert, delete, replace) away. Compare lengths and differences.",
    pros: ["O(n)", "Simple"],
    cons: ["Edge cases"],
    uses: ["Spell check", "DNA edit distance"],
    avoid: "When you need exact distance",
    time: "O(n)",
    space: "O(1)",
    desc: "Determines if two strings are exactly one edit away (insert, delete, replace)."
  },
  'String:repeat_string': {
    eli5: "Check if string B can be formed by repeating string A (possibly with overlap). Use string matching on A repeated enough times.",
    pros: ["O(n+m)", "String search"],
    cons: ["Handles overlaps"],
    uses: ["String periodicity", "Interview"],
    avoid: "When simple substring suffices",
    time: "O(n+m)",
    space: "O(n+m)",
    desc: "Checks if string B is a substring of A repeated multiple times (like 'ab' repeated = 'ababab')."
  },
  'String:reverse_string': {
    eli5: "Reverse a string in place. Use two pointers swapping from ends.",
    pros: ["O(n)", "O(1) space"],
    cons: ["Strings immutable in some languages"],
    uses: ["String reversal", "Palindrome checks"],
    avoid: "When you need a new string",
    time: "O(n)",
    space: "O(1)",
    desc: "Reverses a string in place (or returns reversed copy)."
  },
  'String:roman_to_int': {
    eli5: "Convert Roman numeral to integer. Usually add, but subtract when a smaller precedes larger (IV = 4).",
    pros: ["O(n)", "Simple"],
    cons: ["Only valid Roman"],
    uses: ["Numeral conversion", "Interview"],
    avoid: "Invalid numerals",
    time: "O(n)",
    space: "O(1)",
    desc: "Converts a Roman numeral string to an integer."
  },
  'String:rotate': {
    eli5: "Rotate a string left by k positions (like moving first k chars to end). Reverse parts or use substring.",
    pros: ["O(n)", "Simple"],
    cons: ["String immutability"],
    uses: ["String manipulation", "Cipher"],
    avoid: "When you need in‑place (array)",
    time: "O(n)",
    space: "O(n)",
    desc: "Rotates a string by k positions to the left."
  },
  'String:word_squares': {
    eli5: "Given a set of words, arrange them into a square where the kth row and kth column spell the same word. Backtracking with prefix tries.",
    pros: ["Finds all squares", "Trie optimization"],
    cons: ["Exponential"],
    uses: ["Puzzles", "Word games"],
    avoid: "Large word lists",
    time: "O(n!) worst",
    space: "O(n·L)",
    desc: "Finds all word squares from a list of words (each row equals the corresponding column)."
  },
  'String:z_algorithm': {
    eli5: "Compute the Z‑array: for each position i, the longest substring starting at i that matches a prefix of the string. Used in pattern matching.",
    pros: ["O(n) linear", "Elegant"],
    cons: ["Conceptual difficulty"],
    uses: ["Pattern matching", "String periodicity"],
    avoid: "When you just need substring search (KMP is fine)",
    time: "O(n)",
    space: "O(n)",
    desc: "Z‑algorithm computes the Z‑array for a string, used in linear‑time pattern matching."
  },

  // ─── ARRAY ────────────────────────────────────────────────────────────────
  'Array:two_sum': {
    eli5: "Find two numbers in an array that add up to a target. Use a hash map: for each number, check if (target - number) is already in the map.",
    pros: ["O(n) with hash map", "Classic problem"],
    cons: ["O(n) extra space", "Returns indices, not values by default"],
    uses: ["Sum problems", "Pair finding", "Interview standard"],
    avoid: "When O(n log n) sorting solution is preferred",
    time: "O(n)",
    space: "O(n)",
    desc: "Uses a hash map to find two indices whose values sum to the target in a single pass."
  },
  'Array:move_zeros': {
    eli5: "Move all zeros in an array to the end, keeping non‑zero elements in order. Use two pointers: one writes non‑zeros, the other scans.",
    pros: ["O(n) time, O(1) space", "Stable ordering of non‑zeros"],
    cons: ["Modifies in place"],
    uses: ["Array cleanup", "Data preprocessing", "Interview staple"],
    avoid: "When original order of zeros matters",
    time: "O(n)",
    space: "O(1)",
    desc: "Two‑pointer technique: writes non‑zero elements forward, then fills the rest with zeros."
  },
  'Array:merge_intervals': {
    eli5: "Given a list of time intervals, merge all overlapping ones. Sort by start time, then greedily extend the last merged interval when overlap occurs.",
    pros: ["O(n log n) — sort dominates", "Clean greedy approach"],
    cons: ["Requires sorting first"],
    uses: ["Calendar merging", "File version ranges", "Network bandwidth aggregation"],
    avoid: "Non‑overlapping interval problems",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Sorts intervals by start time, then merges overlapping ones by extending the end of the last merged interval."
  },
  'Array:delete_nth': {
    eli5: "Delete every nth element from an array. Iterate and keep count, skip when count % n == 0.",
    pros: ["O(n)", "Simple"],
    cons: ["Modifies array"],
    uses: ["Data thinning", "Interview"],
    avoid: "When you need to keep original",
    time: "O(n)",
    space: "O(1)",
    desc: "Removes every nth element from an array."
  },
  'Array:flatten': {
    eli5: "Take a nested array like [1,[2,[3]]] and make it flat [1,2,3]. Recursively concatenate or use a stack.",
    pros: ["O(n) total elements", "Recursive/iterative"],
    cons: ["Depth may cause stack overflow"],
    uses: ["Data normalization", "JSON processing"],
    avoid: "When you need to preserve nesting",
    time: "O(n)",
    space: "O(n) (output)",
    desc: "Flattens a nested array structure into a single‑level array."
  },
  'Array:garage': {
    eli5: "A garage has parking spots. Cars arrive and leave. Track available spots. Usually a simulation with queues.",
    pros: ["Simulation", "Data structures"],
    cons: ["Problem‑specific"],
    uses: ["Parking lot design", "Interview"],
    avoid: "General parking",
    time: "O(n)",
    space: "O(n)",
    desc: "Simulates a garage/parking lot with given capacity, handling arrivals/departures."
  },
  'Array:josephus': {
    eli5: "People stand in a circle. Every kth person is eliminated. Find the last survivor. Use recursion or simulation.",
    pros: ["O(n) with formula", "Classic puzzle"],
    cons: ["Simulation O(n·k)"],
    uses: ["Puzzles", "Game theory"],
    avoid: "Large n (use formula)",
    time: "O(n) or O(k·n)",
    space: "O(1)",
    desc: "Josephus problem: find the last remaining person after eliminating every kth person in a circle."
  },
  'Array:limit': {
    eli5: "Limit the number of occurrences of each element to at most L. Use a hash map to count, build new array.",
    pros: ["O(n)", "Simple"],
    cons: ["Extra space"],
    uses: ["Data deduplication with limit", "Frequency capping"],
    avoid: "When you need to preserve all",
    time: "O(n)",
    space: "O(n)",
    desc: "Limits each element's frequency to a given maximum, discarding extra occurrences."
  },
  'Array:longest_non_repeat': {
    eli5: "Find the longest substring without repeating characters. Use sliding window with two pointers and a set/map.",
    pros: ["O(n)", "Sliding window"],
    cons: ["Only contiguous"],
    uses: ["String analysis", "Duplicate detection"],
    avoid: "When subsequence is needed",
    time: "O(n)",
    space: "O(k) where k is alphabet size",
    desc: "Finds the length of the longest substring without repeating characters."
  },
  'Array:max_ones_index': {
    eli5: "In a binary array, find the index of zero that, if flipped to one, gives the longest consecutive ones. Sliding window with at most one zero.",
    pros: ["O(n)", "Sliding window"],
    cons: ["Only for binary"],
    uses: ["Bit manipulation", "Interview"],
    avoid: "When you can flip multiple",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the index of a zero whose replacement with one would yield the longest sequence of consecutive ones."
  },
  'Array:missing_ranges': {
    eli5: "Given a sorted array and a range [lower, upper], find missing ranges. Walk through array and fill gaps.",
    pros: ["O(n)", "Simple"],
    cons: ["Edge cases"],
    uses: ["Range reporting", "Data completeness"],
    avoid: "Unsorted arrays",
    time: "O(n)",
    space: "O(n) output",
    desc: "Finds missing ranges in a sorted array within a given interval."
  },
  'Array:n_sum': {
    eli5: "Generalization of two‑sum: find n numbers that sum to target. Use recursion + two‑sum for n>2.",
    pros: ["O(n^(k-1)) for k‑sum", "Systematic"],
    cons: ["Exponential"],
    uses: ["Combinatorial search", "Interview"],
    avoid: "Large n or k",
    time: "O(n^(k-1))",
    space: "O(n)",
    desc: "Finds all unique k‑tuples that sum to a target (k‑sum problem)."
  },
  'Array:plus_one': {
    eli5: "Add one to a number represented as an array of digits. Handle carry from rightmost.",
    pros: ["O(n)", "Simple"],
    cons: ["May need extra space if all 9s"],
    uses: ["Digit array increment", "Big integer"],
    avoid: "When you can use number",
    time: "O(n)",
    space: "O(1) or O(n)",
    desc: "Increments a non‑negative integer represented as an array of digits by one."
  },
  'Array:remove_duplicates': {
    eli5: "Remove duplicates from a sorted array in‑place, returning new length. Two pointers: one writes unique, other scans.",
    pros: ["O(n) time, O(1) space", "In‑place"],
    cons: ["Only for sorted"],
    uses: ["Array deduplication", "Data cleaning"],
    avoid: "Unsorted arrays",
    time: "O(n)",
    space: "O(1)",
    desc: "Removes duplicates from a sorted array in‑place, returning the new length."
  },
  'Array:rotate': {
    eli5: "Rotate an array to the right by k steps. Reverse parts or use cyclic replacements.",
    pros: ["O(n) time, O(1) space", "Multiple methods"],
    cons: ["Pointer juggling"],
    uses: ["Array rotation", "Circular buffers"],
    avoid: "When you can use extra array",
    time: "O(n)",
    space: "O(1)",
    desc: "Rotates an array to the right by k positions."
  },
  'Array:summarize_ranges': {
    eli5: "Given a sorted array of numbers, summarize consecutive ranges like [0,1,2,4,5,7] → ['0->2','4->5','7'].",
    pros: ["O(n)", "Simple"],
    cons: ["Only sorted"],
    uses: ["Range compression", "Reporting"],
    avoid: "Unsorted arrays",
    time: "O(n)",
    space: "O(n) output",
    desc: "Summarizes consecutive numbers in a sorted array as ranges."
  },
  'Array:three_sum': {
    eli5: "Find all triplets that sum to zero. Sort, then fix one and use two‑sum on the rest.",
    pros: ["O(n²)", "Classic"],
    cons: ["Need to skip duplicates"],
    uses: ["Triplet search", "Interview"],
    avoid: "When n is huge",
    time: "O(n²)",
    space: "O(1) extra",
    desc: "Finds all unique triplets in an array that sum to zero."
  },
  'Array:top_1': {
    eli5: "Find the most frequent element in an array. Use a hash map to count, then find max.",
    pros: ["O(n)", "Simple"],
    cons: ["Extra space"],
    uses: ["Mode finding", "Popularity"],
    avoid: "When tie‑breaking matters",
    time: "O(n)",
    space: "O(n)",
    desc: "Finds the element with the highest frequency in an array."
  },
  'Array:trimmean': {
    eli5: "Compute the mean after removing a certain percentage of the smallest and largest values. Sort, then average middle.",
    pros: ["O(n log n)", "Robust mean"],
    cons: ["Sorting overhead"],
    uses: ["Statistics", "Outlier removal"],
    avoid: "When you need exact mean",
    time: "O(n log n)",
    space: "O(1) if sort in‑place",
    desc: "Calculates the trimmed mean (ignores a given percentage of extreme values)."
  },

  // ─── BACKTRACKING ─────────────────────────────────────────────────────────
  'Backtracking:permute': {
    eli5: "Generate all possible orderings of a list. Fix one element, recurse on the rest, then backtrack (undo the choice) and try another.",
    pros: ["Generates all solutions", "General technique"],
    cons: ["O(n!) — explodes fast", "Not suitable for large n"],
    uses: ["Combinatorics", "Scheduling problems", "Testing all orderings"],
    avoid: "n > ~10 without pruning",
    time: "O(n!)",
    space: "O(n)",
    desc: "Generates all permutations by swapping elements and recursing, then swapping back to backtrack."
  },
  'Backtracking:subsets': {
    eli5: "Generate all possible subsets of a set. At each element, you make a choice: include it or don't. Two choices per element → 2ⁿ subsets total.",
    pros: ["Generates all 2ⁿ subsets", "Clean recursive structure"],
    cons: ["Exponential output size"],
    uses: ["Power set generation", "Feature selection", "Combinatorial problems"],
    avoid: "Large sets without filtering",
    time: "O(2ⁿ)",
    space: "O(n)",
    desc: "Recursively builds all subsets by choosing to include or exclude each element."
  },
  'Backtracking:add_operators': {
    eli5: "Given a string of digits, insert +, -, or * to achieve a target value. Backtrack through all placements, handling precedence.",
    pros: ["Finds all expressions", "Expression evaluation"],
    cons: ["O(4ⁿ) worst", "Precedence tricky"],
    uses: ["Puzzles", "Expression building"],
    avoid: "Long strings",
    time: "O(4ⁿ)",
    space: "O(n)",
    desc: "Finds all ways to add operators (+, -, *) to a digit string to get a target value."
  },
  'Backtracking:anagram': {
    eli5: "Find all anagrams of a word (permutations of letters). Same as permute but with possible duplicates, need to skip repeats.",
    pros: ["O(n!) but with pruning", "Classic"],
    cons: ["Duplicate handling"],
    uses: ["Word games", "Cryptography"],
    avoid: "Long words",
    time: "O(n!)",
    space: "O(n)",
    desc: "Generates all unique permutations (anagrams) of a string, handling duplicates."
  },
  'Backtracking:array_sum_combinations': {
    eli5: "Find all combinations of numbers from an array that sum to a target (with repetitions allowed or not). Backtracking with pruning.",
    pros: ["Finds all combos", "Classic"],
    cons: ["Exponential"],
    uses: ["Subset sum", "Coin change (combinations)"],
    avoid: "Large target or array",
    time: "O(2ⁿ) worst",
    space: "O(n)",
    desc: "Finds all unique combinations of array elements that sum to a target (with or without repetition)."
  },
  'Backtracking:combination_sum': {
    eli5: "Same as array_sum_combinations, often meaning with repetition allowed. Backtracking.",
    pros: ["Finds all combos"],
    cons: ["Exponential"],
    uses: ["Combinatorial sums"],
    avoid: "Large input",
    time: "O(2ⁿ) worst",
    space: "O(n)",
    desc: "Finds all combinations that sum to a target, where elements can be used unlimited times."
  },
  'Backtracking:factor_combinations': {
    eli5: "Find all factor combinations of a number (like 12 = 2*2*3, 2*6, 3*4). Backtracking with factors.",
    pros: ["Finds all factorizations"],
    cons: ["Exponential"],
    uses: ["Number theory", "Puzzles"],
    avoid: "Large numbers",
    time: "O(√n!) worst",
    space: "O(log n)",
    desc: "Finds all possible factor combinations of an integer (excluding 1 and itself)."
  },
  'Backtracking:find_words': {
    eli5: "Given a board of letters and a dictionary, find all words that can be formed. Backtracking on board with trie for efficiency.",
    pros: ["Trie speeds up", "Classic Boggle"],
    cons: ["Exponential"],
    uses: ["Word games", "Boggle solver"],
    avoid: "Huge boards",
    time: "O(rows·cols·4^L) where L is word length",
    space: "O(dictionary)",
    desc: "Finds all words from a dictionary that can be formed by adjacent letters on a board."
  },
  'Backtracking:generate_abbreviations': {
    eli5: "Generate all abbreviations of a word like 'word' → '1or2', 'w2d', etc. Backtrack: at each char, either keep or replace with number.",
    pros: ["O(2ⁿ)", "Interesting"],
    cons: ["Output size large"],
    uses: ["Word abbreviation", "Interview"],
    avoid: "Long words",
    time: "O(2ⁿ)",
    space: "O(n)",
    desc: "Generates all possible abbreviations of a word by replacing consecutive characters with numbers."
  },
  'Backtracking:generate_parenthesis': {
    eli5: "Generate all valid parentheses combinations for n pairs. Backtrack: add '(' if count < n, add ')' if close < open.",
    pros: ["O(4ⁿ/√n) Catalan", "Classic"],
    cons: ["Only parentheses"],
    uses: ["Expression generation", "Compiler"],
    avoid: "Large n",
    time: "O(4ⁿ/√n)",
    space: "O(n)",
    desc: "Generates all valid parentheses strings with n pairs."
  },
  'Backtracking:letter_combination': {
    eli5: "Given a phone number (digits), generate all possible letter combinations (like old keypads). Backtracking.",
    pros: ["O(4ⁿ)", "Simple"],
    cons: ["Exponential"],
    uses: ["Phone mnemonics", "Interview"],
    avoid: "Long digit string",
    time: "O(4ⁿ)",
    space: "O(n)",
    desc: "Generates all possible letter combinations from a digit string (phone keypad mapping)."
  },
  'Backtracking:palindrome_partitioning': {
    eli5: "Partition a string into substrings that are all palindromes. Backtracking: try all prefixes, recurse if prefix is palindrome.",
    pros: ["Finds all partitions", "Backtracking"],
    cons: ["Exponential"],
    uses: ["String partitioning", "Palindrome decomposition"],
    avoid: "Long strings",
    time: "O(2ⁿ) worst",
    space: "O(n)",
    desc: "Finds all ways to partition a string into substrings that are all palindromes."
  },
  'Backtracking:pattern_match': {
    eli5: "Match a pattern like 'abba' to a string like 'dogcatcatdog' where a and b map to substrings. Backtracking with mapping.",
    pros: ["Finds mappings", "Backtracking"],
    cons: ["Exponential"],
    uses: ["Pattern recognition", "Interview"],
    avoid: "Long patterns",
    time: "O(2ⁿ) worst",
    space: "O(n)",
    desc: "Determines if a pattern (with letters) matches a string where each letter maps to a non‑empty substring."
  },
  'Backtracking:permute_unique': {
    eli5: "Generate all unique permutations of a list that may contain duplicates. Use a frequency map and backtracking to avoid repeats.",
    pros: ["Generates only unique", "Efficient with pruning"],
    cons: ["Still O(n!) worst"],
    uses: ["Permutations with duplicates", "Combinatorics"],
    avoid: "Large n with many duplicates",
    time: "O(n!)",
    space: "O(n)",
    desc: "Generates all unique permutations of a multiset."
  },
  'Backtracking:minimax': {
    eli5: "Algorithm for two‑player games (like Tic‑Tac‑Toe). Assume both play optimally: maximize your score, minimize opponent's.",
    pros: ["Optimal for perfect information", "Foundation for AI"],
    cons: ["Exponential search", "Needs evaluation function"],
    uses: ["Game AI", "Decision making"],
    avoid: "Games with large branching factor",
    time: "O(b^d)",
    space: "O(d)",
    desc: "Minimax algorithm for game theory: choose move that maximizes your chance assuming opponent minimizes it."
  },
  'Backtracking:subsets_unique': {
    eli5: "Generate all unique subsets of a multiset (with duplicates). Sort and skip duplicates during recursion.",
    pros: ["Generates all unique subsets", "Backtracking"],
    cons: ["Exponential"],
    uses: ["Power set with duplicates", "Combinatorics"],
    avoid: "Large sets",
    time: "O(2ⁿ)",
    space: "O(n)",
    desc: "Generates all unique subsets of a collection that may contain duplicates."
  },

  // ─── BIT MANIPULATION ─────────────────────────────────────────────────────
  'Bit Manipulation:add_bitwise_operator': {
    eli5: "Add two numbers without using +, using bitwise XOR and AND with carry. Repeat until carry is zero.",
    pros: ["O(1) or O(number of bits)", "Bit manipulation exercise"],
    cons: ["Only for integers"],
    uses: ["Low‑level arithmetic", "Interview"],
    avoid: "When + is allowed",
    time: "O(1)",
    space: "O(1)",
    desc: "Adds two integers using bitwise operations (XOR for sum, AND for carry)."
  },
  'Bit Manipulation:binary_gap': {
    eli5: "Find the longest distance between two 1's in the binary representation of a number. Scan bits, track last seen one.",
    pros: ["O(log n)", "Simple"],
    cons: ["Only for positive ints"],
    uses: ["Binary analysis", "Interview"],
    avoid: "When not needed",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds the maximum distance between two consecutive 1's in the binary representation of a number."
  },
  'Bit Manipulation:bit_operation': {
    eli5: "Various bit tricks: get, set, clear, toggle a bit. Also check if power of two, count ones, etc.",
    pros: ["O(1) per operation", "Efficient"],
    cons: ["Need to understand bitwise"],
    uses: ["Low‑level programming", "Optimization"],
    avoid: "When readability matters",
    time: "O(1)",
    space: "O(1)",
    desc: "Common bitwise operations: get bit, set bit, clear bit, toggle bit, etc."
  },
  'Bit Manipulation:bytes_int_conversion': {
    eli5: "Convert between integers and byte arrays (big‑endian/little‑endian). Shift and mask.",
    pros: ["O(1)", "System programming"],
    cons: ["Endianness matters"],
    uses: ["Network protocols", "File I/O"],
    avoid: "When using high‑level languages",
    time: "O(1)",
    space: "O(1)",
    desc: "Converts integers to/from byte arrays, handling endianness."
  },
  'Bit Manipulation:count_flips_to_convert': {
    eli5: "Count number of bits you need to flip to turn number A into B. XOR and count ones.",
    pros: ["O(1)", "Simple"],
    cons: ["Only for integers"],
    uses: ["Hamming distance", "Error correction"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Counts the number of bit flips required to convert one integer to another."
  },
  'Bit Manipulation:count_ones': {
    eli5: "Count the number of 1 bits in an integer (population count). Use Brian Kernighan's algorithm: n &= (n-1) until zero.",
    pros: ["O(number of ones)", "Efficient"],
    cons: ["Simple"],
    uses: ["Parity", "Cryptography"],
    avoid: "When built‑in popcount exists",
    time: "O(number of ones)",
    space: "O(1)",
    desc: "Counts the number of 1 bits (Hamming weight) in an integer."
  },
  'Bit Manipulation:find_difference': {
    eli5: "Given two strings, one is a shuffle of the other plus one extra character. Find that character. XOR all chars, result is extra.",
    pros: ["O(n) time, O(1) space", "Clever XOR"],
    cons: ["Only for single extra"],
    uses: ["String diff", "Interview"],
    avoid: "Multiple differences",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the extra character in one string compared to another using XOR."
  },
  'Bit Manipulation:find_missing_number': {
    eli5: "Given an array of n numbers from 0..n with one missing, find missing. XOR all indices and values.",
    pros: ["O(n) time, O(1) space", "XOR trick"],
    cons: ["Only works for one missing"],
    uses: ["Data integrity", "Interview"],
    avoid: "Multiple missing",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the missing number in an array of 0..n using XOR."
  },
  'Bit Manipulation:flip_bit_longest_sequence': {
    eli5: "You can flip one bit from 0 to 1. Find the longest sequence of 1s possible. Scan runs of ones and zeros.",
    pros: ["O(log n)", "Bit manipulation"],
    cons: ["Only for binary numbers"],
    uses: ["Bit analysis", "Interview"],
    avoid: "When not needed",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds the longest sequence of 1s you can create by flipping a single 0 to 1 in the binary representation."
  },
  'Bit Manipulation:gray_code': {
    eli5: "Generate Gray code sequence where successive numbers differ by only one bit. Use formula i ^ (i>>1).",
    pros: ["O(2ⁿ)", "Simple formula"],
    cons: ["Only for n bits"],
    uses: ["Error correction", "Digital circuits"],
    avoid: "When not needed",
    time: "O(2ⁿ)",
    space: "O(2ⁿ)",
    desc: "Generates the n‑bit Gray code sequence."
  },
  'Bit Manipulation:has_alternative_bit': {
    eli5: "Check if a number's binary representation has alternating bits (like 101010). Use (n ^ (n>>1)) to see if all ones.",
    pros: ["O(1)", "Bit trick"],
    cons: ["Only for positive"],
    uses: ["Pattern detection", "Interview"],
    avoid: "Large numbers but still O(1)",
    time: "O(1)",
    space: "O(1)",
    desc: "Checks if a number has alternating bits (e.g., 1010)."
  },
  'Bit Manipulation:insert_bit': {
    eli5: "Insert a bit at a given position in a number. Shift parts and OR.",
    pros: ["O(1)", "Bit manipulation"],
    cons: ["Need to know position"],
    uses: ["Bit stuffing", "Low‑level"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Inserts a bit (0 or 1) at a specified position in an integer."
  },
  'Bit Manipulation:power_of_two': {
    eli5: "Check if a number is a power of two. Use n & (n-1) == 0 (and n>0).",
    pros: ["O(1)", "Bit trick"],
    cons: ["Only for positive"],
    uses: ["Power detection", "Optimization"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Checks if an integer is a power of two."
  },
  'Bit Manipulation:remove_bit': {
    eli5: "Remove a bit at a given position (like delete). Split into left and right parts and combine.",
    pros: ["O(1)", "Bit manipulation"],
    cons: ["Need to know position"],
    uses: ["Bit deletion", "Low‑level"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Removes a bit at a specified position, effectively shortening the number."
  },
  'Bit Manipulation:reverse_bits': {
    eli5: "Reverse the bits of an integer. Use swapping or divide and conquer with masks.",
    pros: ["O(1) (word size)", "Bitwise"],
    cons: ["Implementation tricky"],
    uses: ["Endian conversion", "Cryptography"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Reverses the bits of an integer."
  },
  'Bit Manipulation:single_number': {
    eli5: "Find the element that appears once in an array where every other appears twice. XOR all elements.",
    pros: ["O(n) time, O(1) space", "XOR trick"],
    cons: ["Only works for one odd‑occurring"],
    uses: ["Data integrity", "Interview"],
    avoid: "Multiple singles",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the element that appears once in an array where all others appear twice."
  },
  'Bit Manipulation:single_number2': {
    eli5: "Find the element that appears once in an array where every other appears three times. Use bit counting mod 3.",
    pros: ["O(n) time, O(1) space", "Bit counting"],
    cons: ["More complex"],
    uses: ["Data integrity", "Interview"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the element that appears once in an array where all others appear three times."
  },
  'Bit Manipulation:single_number3': {
    eli5: "Find the two elements that appear once in an array where every other appears twice. XOR to get combined, then separate based on a set bit.",
    pros: ["O(n) time, O(1) space", "XOR and partition"],
    cons: ["Tricky"],
    uses: ["Data integrity", "Interview"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds the two elements that appear once in an array where all others appear twice."
  },
  'Bit Manipulation:subsets': {
    eli5: "Generate all subsets using bitmasks. For n elements, iterate from 0 to 2ⁿ-1, each bit indicates inclusion.",
    pros: ["O(2ⁿ * n)", "Iterative"],
    cons: ["Works only for small n"],
    uses: ["Power set", "Combinatorics"],
    avoid: "Large n",
    time: "O(2ⁿ * n)",
    space: "O(2ⁿ * n) output",
    desc: "Generates all subsets of a set using bitmask enumeration."
  },
  'Bit Manipulation:swap_pair': {
    eli5: "Swap every pair of bits (e.g., bit0 with bit1, bit2 with bit3). Use masks and shifts.",
    pros: ["O(1)", "Bitwise"],
    cons: ["Only for integer"],
    uses: ["Bit transformation", "Interview"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Swaps adjacent bit pairs in an integer."
  },

  // ─── COMPRESSION ──────────────────────────────────────────────────────────
  'Compression:huffman_coding': {
    eli5: "Give shorter codes to frequent characters and longer codes to rare ones. Build a binary tree by merging the two least‑frequent nodes repeatedly.",
    pros: ["Optimal prefix‑free code", "Real compression used everywhere"],
    cons: ["Need two passes (build tree then encode)", "Overhead for storing tree"],
    uses: ["ZIP files", "JPEG, PNG compression", "MP3 encoding"],
    avoid: "When all characters have equal frequency",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Builds an optimal prefix‑free binary code by constructing a Huffman tree from character frequencies."
  },
  'Compression:rle_compression': {
    eli5: "'AAABBBCCCC' becomes '3A3B4C'. Count consecutive identical characters and replace them with count + character. Simple run‑length encoding!",
    pros: ["O(n) simple", "Great for repetitive data"],
    cons: ["Can EXPAND data if little repetition (ABCD → 1A1B1C1D)"],
    uses: ["BMP images", "Fax transmission", "Simple data compression"],
    avoid: "Random data with little repetition",
    time: "O(n)",
    space: "O(n)",
    desc: "Encodes runs of consecutive identical characters as (count, character) pairs."
  },
  'Compression:elias': {
    eli5: "Elias gamma coding encodes positive integers using unary for length and binary for the number. Useful for small integers.",
    pros: ["Simple", "Good for small numbers"],
    cons: ["Not optimal for large numbers"],
    uses: ["Data compression", "Information theory"],
    avoid: "Large numbers",
    time: "O(log n)",
    space: "O(log n)",
    desc: "Elias gamma coding: a universal code for positive integers."
  },

  // ─── GREEDY ───────────────────────────────────────────────────────────────
  'Greedy:gale_shapley': {
    eli5: "Stable matching algorithm, e.g., matching hospitals and residents. Each side proposes, and the other accepts if better than current.",
    pros: ["O(n²)", "Produces stable matching"],
    cons: ["One side optimal, other side may suffer"],
    uses: ["College admissions", "Job matching"],
    avoid: "When you need fair match",
    time: "O(n²)",
    space: "O(n²)",
    desc: "Gale‑Shapley algorithm for stable matching (e.g., marriage problem)."
  },
  'Greedy:max_contiguous_subsequence_sum': {
    eli5: "Same as Kadane's algorithm (max subarray sum). Greedy: keep current sum, reset if negative.",
    pros: ["O(n)", "Simple"],
    cons: ["Only for contiguous"],
    uses: ["Stock profit", "Signal processing"],
    avoid: "Non‑contiguous",
    time: "O(n)",
    space: "O(1)",
    desc: "Finds maximum sum of contiguous subsequence (Kadane's algorithm)."
  },

  // ─── HEAP ─────────────────────────────────────────────────────────────────
  'Heap:sliding_window_max': {
    eli5: "Find the maximum in each sliding window of size k. Use a deque to store indices, keeping only useful (potentially max) values in decreasing order.",
    pros: ["O(n) linear time", "Elegant deque usage"],
    cons: ["Complex deque management"],
    uses: ["Stock price windows", "Network buffer analysis", "Any sliding maximum problem"],
    avoid: "When k is 1 or equals n",
    time: "O(n)",
    space: "O(k)",
    desc: "Uses a monotonic deque to track maximum elements within a sliding window of size k in O(n)."
  },
  'Heap:k_closest_points': {
    eli5: "Find the k closest points to the origin. Use a max‑heap of size k to keep the smallest distances.",
    pros: ["O(n log k)", "Efficient"],
    cons: ["Need custom comparator"],
    uses: ["Geospatial queries", "Machine learning"],
    avoid: "When k is large (use sort)",
    time: "O(n log k)",
    space: "O(k)",
    desc: "Finds the k closest points to the origin using a max‑heap."
  },
  'Heap:merge_sorted_k_lists': {
    eli5: "Merge k sorted linked lists into one. Use a min‑heap to always pick the smallest head among all lists.",
    pros: ["O(n log k)", "Efficient"],
    cons: ["Heap overhead"],
    uses: ["External sorting", "Database merging"],
    avoid: "When k is small (simple merge)",
    time: "O(n log k)",
    space: "O(k)",
    desc: "Merges k sorted linked lists using a priority queue."
  },
  'Heap:skyline': {
    eli5: "Given building coordinates, find the skyline outline. Use a max‑heap of heights, process events (start/end).",
    pros: ["O(n log n)", "Classic problem"],
    cons: ["Complex event handling"],
    uses: ["City modeling", "Graphics"],
    avoid: "When not needed",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Computes the skyline of a city given building rectangles."
  },

  // ─── MAP ──────────────────────────────────────────────────────────────────
  'Map:is_anagram': {
    eli5: "Check if two words are anagrams. Count letters in one, decrement for the other; all counts zero if anagram.",
    pros: ["O(n)", "Simple"],
    cons: ["Fixed alphabet"],
    uses: ["Anagram detection", "Word games"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(1) (alphabet)",
    desc: "Checks if two strings are anagrams using character counts."
  },
  'Map:is_isomorphic': {
    eli5: "Check if two strings have a one‑to‑one mapping of characters. Use two maps to track mappings in both directions.",
    pros: ["O(n)", "Simple"],
    cons: ["Must be bijection"],
    uses: ["Pattern matching", "String isomorphism"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(1) (alphabet)",
    desc: "Determines if two strings are isomorphic (character mapping is bijective)."
  },
  'Map:longest_common_subsequence': {
    eli5: "Same as DP version, but here using map? Usually DP, but sometimes we use map for sparse sequences. O(m·n) typical.",
    pros: ["Classic DP"],
    cons: ["O(m·n) time/space"],
    uses: ["Diff", "Bioinformatics"],
    avoid: "When not needed",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Longest common subsequence (same as DP entry, but listed under Map)."
  },
  'Map:randomized_set': {
    eli5: "Design a data structure that supports insert, delete, and getRandom in O(1) average. Use a map and an array.",
    pros: ["O(1) average", "Efficient"],
    cons: ["Implementation care"],
    uses: ["Randomized algorithms", "Data structure design"],
    avoid: "When order matters",
    time: "O(1) average",
    space: "O(n)",
    desc: "Implements a set with insert, delete, and getRandom in constant time using a hash map and dynamic array."
  },
  'Map:valid_sudoku': {
    eli5: "Check if a Sudoku board is valid (rows, columns, boxes have no duplicates). Use hash sets for each.",
    pros: ["O(1) (81 cells)", "Simple"],
    cons: ["Only for 9x9"],
    uses: ["Sudoku validation", "Game checking"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Validates a 9x9 Sudoku board using hash sets for rows, columns, and boxes."
  },
  'Map:word_pattern': {
    eli5: "Check if a string follows a pattern like 'abba' maps to 'dog cat cat dog'. Use two maps for bijection.",
    pros: ["O(n)", "Simple"],
    cons: ["Need bijection"],
    uses: ["Pattern matching", "String analysis"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(n)",
    desc: "Determines if a string follows a given pattern (bijection between pattern letters and words)."
  },

  // ─── MATH ──────────────────────────────────────────────────────────────────
  'Math:prime_check': {
    eli5: "Is a number prime? Check if anything from 2 to √n divides it. If nothing does, it's prime! Only go to √n because factors come in pairs.",
    pros: ["O(√n) — much faster than O(n)", "Simple to implement"],
    cons: ["Slow for very large numbers"],
    uses: ["Cryptography basics", "RSA key generation", "Math puzzles"],
    avoid: "Very large primes (use Miller‑Rabin)",
    time: "O(√n)",
    space: "O(1)",
    desc: "Tests primality by checking divisibility up to √n, exploiting that factors come in pairs."
  },
  'Math:fibonacci': {
    eli5: "Each number is the sum of the two before it: 0,1,1,2,3,5,8,13… Can be computed iteratively in O(n) or with the golden ratio formula in O(1)!",
    pros: ["O(1) with Binet's formula", "O(n) iterative is simple"],
    cons: ["Binet's formula has floating point errors for large n"],
    uses: ["Mathematical sequences", "Golden ratio approximation", "DP teaching"],
    avoid: "Large n without matrix exponentiation",
    time: "O(n)",
    space: "O(1)",
    desc: "Generates the nth Fibonacci number using iteration or memoization."
  },
  'Math:gcd': {
    eli5: "Euclid's algorithm: gcd(a,b) = gcd(b, a mod b). Keep reducing until b=0. The last non‑zero value is the GCD. Incredibly elegant!",
    pros: ["O(log(min(a,b))) — very fast", "Ancient algorithm (300 BC)"],
    cons: ["Only for integers"],
    uses: ["Fraction simplification", "RSA cryptography", "Solving linear Diophantine equations"],
    avoid: "Real numbers",
    time: "O(log n)",
    space: "O(1)",
    desc: "Euclid's algorithm: recursively computes gcd(a,b) = gcd(b, a%b) until b=0."
  },
  'Math:base_conversion': {
    eli5: "Convert a number from one base to another. Convert to decimal first, then to target base.",
    pros: ["O(n)", "Simple"],
    cons: ["Handles only integer bases"],
    uses: ["Number systems", "Programming"],
    avoid: "When not needed",
    time: "O(n)",
    space: "O(n)",
    desc: "Converts a number from one base to another."
  },
  'Math:chinese_remainder_theorem': {
    eli5: "Find a number that has given remainders when divided by several coprime moduli. Combine using modular arithmetic.",
    pros: ["Solves system of congruences", "Efficient"],
    cons: ["Requires coprime moduli"],
    uses: ["Cryptography", "Number theory"],
    avoid: "Non‑coprime moduli",
    time: "O(n log M)",
    space: "O(1)",
    desc: "Chinese Remainder Theorem: solves for x given x ≡ a_i (mod n_i) with coprime moduli."
  },
  'Math:combination': {
    eli5: "Calculate C(n, k) = n choose k. Use formula n!/(k!(n‑k)!). Can use DP or direct computation with multiplication/division to avoid overflow.",
    pros: ["O(k) or O(n)", "Math"],
    cons: ["Overflow risk"],
    uses: ["Combinatorics", "Probability"],
    avoid: "Large n (use library)",
    time: "O(k)",
    space: "O(1)",
    desc: "Computes binomial coefficient C(n, k)."
  },
  'Math:cosine_similarity': {
    eli5: "Measure similarity between two vectors as the cosine of the angle between them. Dot product divided by magnitudes.",
    pros: ["O(n)", "Common in ML"],
    cons: ["Sensitive to magnitude"],
    uses: ["Text similarity", "Recommendation systems"],
    avoid: "When magnitude matters",
    time: "O(n)",
    space: "O(1)",
    desc: "Computes cosine similarity between two vectors."
  },
  'Math:euler_totient': {
    eli5: "Count numbers less than n that are coprime to n. For prime p, φ(p)=p‑1. Use formula with prime factors.",
    pros: ["O(√n)", "Number theory"],
    cons: ["Factorization needed"],
    uses: ["Cryptography", "RSA"],
    avoid: "Large n without factorization",
    time: "O(√n)",
    space: "O(1)",
    desc: "Euler's totient function φ(n): counts positive integers ≤ n that are coprime to n."
  },
  'Math:extended_gcd': {
    eli5: "Besides gcd, also finds coefficients x,y such that ax + by = gcd(a,b). Useful for modular inverses.",
    pros: ["O(log n)", "Extended Euclid"],
    cons: ["Slightly more complex"],
    uses: ["Modular inverse", "Diophantine equations"],
    avoid: "When only gcd needed",
    time: "O(log n)",
    space: "O(1)",
    desc: "Extended Euclidean algorithm: finds x,y such that ax + by = gcd(a,b)."
  },
  'Math:factorial': {
    eli5: "Product of all integers from 1 to n. Grows fast. Can compute iteratively or recursively.",
    pros: ["O(n)", "Simple"],
    cons: ["Overflows quickly"],
    uses: ["Combinatorics", "Probability"],
    avoid: "Large n (use Stirling or big ints)",
    time: "O(n)",
    space: "O(1)",
    desc: "Computes factorial of n."
  },
  'Math:fft': {
    eli5: "Fast Fourier Transform converts a signal from time to frequency domain. Used in signal processing, polynomial multiplication.",
    pros: ["O(n log n)", "Revolutionary"],
    cons: ["Complex implementation"],
    uses: ["Audio processing", "Image compression", "Polynomial multiplication"],
    avoid: "When not needed",
    time: "O(n log n)",
    space: "O(n)",
    desc: "Fast Fourier Transform (Cooley–Tukey algorithm)."
  },
  'Math:goldbach': {
    eli5: "Goldbach's conjecture: every even number >2 can be expressed as sum of two primes. This algorithm finds such a pair.",
    pros: ["Verifies conjecture for given n", "Prime check"],
    cons: ["Not proven for all n"],
    uses: ["Number theory", "Education"],
    avoid: "Large n",
    time: "O(√n log log n)",
    space: "O(1)",
    desc: "Finds two primes that sum to an even number (Goldbach's conjecture)."
  },
  'Math:hailstone': {
    eli5: "Hailstone sequence (Collatz conjecture): if odd, 3n+1; if even, n/2. Repeat until 1. Sequence length.",
    pros: ["Simple", "Fun"],
    cons: ["Conjecture unproven"],
    uses: ["Programming exercise", "Math"],
    avoid: "When not needed",
    time: "O(steps)",
    space: "O(1)",
    desc: "Generates the hailstone sequence (Collatz conjecture) for a given number."
  },
  'Math:linear_regression': {
    eli5: "Fit a line y = mx + b to data points. Use least squares: compute means, slope, intercept.",
    pros: ["O(n)", "Simple"],
    cons: ["Assumes linear relationship"],
    uses: ["Statistics", "Trend analysis"],
    avoid: "Non‑linear data",
    time: "O(n)",
    space: "O(1)",
    desc: "Simple linear regression using ordinary least squares."
  },
  'Math:manhattan_distance': {
    eli5: "Distance between points in a grid where you can only move horizontally/vertically. |x1‑x2| + |y1‑y2|.",
    pros: ["O(1)", "Simple"],
    cons: ["Only for grid"],
    uses: ["Pathfinding", "City block distance"],
    avoid: "When Euclidean needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Computes Manhattan (L1) distance between two points."
  },
  'Math:modular_exponential': {
    eli5: "Compute (base^exp) % mod efficiently using exponentiation by squaring. Essential for cryptography.",
    pros: ["O(log exp)", "Fast"],
    cons: ["Need to handle mod"],
    uses: ["RSA", "Cryptography"],
    avoid: "When exp is small",
    time: "O(log exp)",
    space: "O(1)",
    desc: "Modular exponentiation (fast exponentiation with modulo)."
  },
  'Math:nth_digit': {
    eli5: "Find the nth digit in the infinite sequence 123456789101112... Use grouping by digit length.",
    pros: ["O(log n)", "Math"],
    cons: ["Off‑by‑one"],
    uses: ["Digit problems", "Interview"],
    avoid: "When n huge but still fine",
    time: "O(log n)",
    space: "O(1)",
    desc: "Finds the nth digit in the infinite integer sequence."
  },
  'Math:num_digits': {
    eli5: "Count the number of digits in a number. Use log10 or loop.",
    pros: ["O(1) with log", "Simple"],
    cons: ["Floating issues with log"],
    uses: ["Digit counting", "Programming"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Counts the number of digits in an integer."
  },
  'Math:power': {
    eli5: "Compute x^n. Use exponentiation by squaring for efficiency.",
    pros: ["O(log n)", "Fast"],
    cons: ["Handle negative exponents"],
    uses: ["Math", "Scientific computing"],
    avoid: "When n small",
    time: "O(log n)",
    space: "O(1)",
    desc: "Computes x raised to power n (fast exponentiation)."
  },
  'Math:primes_sieve_of_eratosthenes': {
    eli5: "Find all primes up to n. Mark multiples of each prime starting from 2. Efficient for moderate n.",
    pros: ["O(n log log n)", "Classic"],
    cons: ["Memory O(n)"],
    uses: ["Prime generation", "Number theory"],
    avoid: "Large n (segmented sieve)",
    time: "O(n log log n)",
    space: "O(n)",
    desc: "Sieve of Eratosthenes: generates all primes up to n."
  },
  'Math:sqrt_precision_factor': {
    eli5: "Compute square root to a given precision using Newton's method (babylonian).",
    pros: ["O(log n) iterations", "Fast"],
    cons: ["Floating point"],
    uses: ["Math", "Numerical methods"],
    avoid: "When built‑in sqrt exists",
    time: "O(log n)",
    space: "O(1)",
    desc: "Computes square root with specified precision using Newton's method."
  },
  'Math:summing_digits': {
    eli5: "Sum the digits of a number. Loop and add remainder.",
    pros: ["O(log n)", "Simple"],
    cons: ["None"],
    uses: ["Digit sum", "Digital root"],
    avoid: "When not needed",
    time: "O(log n)",
    space: "O(1)",
    desc: "Sums the digits of an integer."
  },

  // ─── MATRIX ───────────────────────────────────────────────────────────────
  'Matrix:spiral_traversal': {
    eli5: "Traverse a matrix in a spiral: go right, then down, then left, then up, shrinking the boundary each time until all cells are visited.",
    pros: ["O(m·n) visits every cell once", "Elegant boundary tracking"],
    cons: ["Off‑by‑one errors are common", "4 direction pointers to manage"],
    uses: ["Matrix printing", "Image processing", "Interview problem"],
    avoid: "When row/column order matters more",
    time: "O(m·n)",
    space: "O(1)",
    desc: "Traverses a 2D matrix in spiral order by maintaining top/bottom/left/right boundaries."
  },
  'Matrix:rotate_image': {
    eli5: "Rotate a matrix 90° clockwise in‑place: first transpose (flip along the diagonal), then reverse each row. No extra matrix needed!",
    pros: ["O(n²) in‑place", "Elegant two‑step approach"],
    cons: ["Only square matrices"],
    uses: ["Image rotation", "Game board manipulation", "Computer graphics"],
    avoid: "Non‑square matrices",
    time: "O(n²)",
    space: "O(1)",
    desc: "Rotates an n×n matrix 90° clockwise by first transposing it, then reversing each row."
  },
  'Matrix:bomb_enemy': {
    eli5: "In a grid with walls, find where to place a bomb to kill the most enemies (enemies in same row/col until wall). DP from four directions.",
    pros: ["O(m·n)", "DP"],
    cons: ["Complex state"],
    uses: ["Game strategy", "Interview"],
    avoid: "When grid is small",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Bomb enemy problem: place a bomb to maximize enemies killed in same row/col until wall."
  },
  'Matrix:copy_transform': {
    eli5: "Copy a matrix with a transformation (like rotation, scaling). Create a new matrix and fill using mapping.",
    pros: ["O(m·n)", "Simple"],
    cons: ["Extra memory"],
    uses: ["Image processing", "Graphics"],
    avoid: "When in‑place possible",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Copies a matrix while applying a transformation (e.g., rotation, reflection)."
  },
  'Matrix:count_paths': {
    eli5: "Count paths in a grid from top‑left to bottom‑right moving only down/right. Same as DP count_paths_dp.",
    pros: ["O(m·n)", "Simple DP"],
    cons: ["Only down/right"],
    uses: ["Robot movement", "Combinatorics"],
    avoid: "When obstacles exist",
    time: "O(m·n)",
    space: "O(m·n)",
    desc: "Counts all unique paths in a grid (same as count_paths_dp)."
  },
  'Matrix:matrix_exponentiation': {
    eli5: "Raise a matrix to a power n quickly using exponentiation by squaring. Used for linear recurrences like Fibonacci.",
    pros: ["O(k³ log n) where k is matrix size", "Fast"],
    cons: ["Matrix multiplication cost"],
    uses: ["Linear recurrences", "Graph theory"],
    avoid: "When n small",
    time: "O(k³ log n)",
    space: "O(k²)",
    desc: "Matrix exponentiation (fast power for matrices)."
  },
  'Matrix:multiply': {
    eli5: "Multiply two matrices. Standard O(n³) or Strassen for large ones.",
    pros: ["Simple O(n³)", "Foundation"],
    cons: ["Slow for large"],
    uses: ["Linear algebra", "Graphics"],
    avoid: "When using libraries",
    time: "O(n³)",
    space: "O(n²)",
    desc: "Multiplies two matrices (standard algorithm)."
  },
  'Matrix:search_in_sorted_matrix': {
    eli5: "Search for a value in a matrix where each row and column is sorted. Start from top‑right, move left/down.",
    pros: ["O(m+n)", "Efficient"],
    cons: ["Only for row/col sorted"],
    uses: ["Search in 2D", "Interview"],
    avoid: "Unsorted matrices",
    time: "O(m+n)",
    space: "O(1)",
    desc: "Searches for a target in a row‑wise and column‑wise sorted matrix."
  },
  'Matrix:sudoku_validator': {
    eli5: "Same as valid_sudoku, but for a given matrix. Check rows, columns, subgrids.",
    pros: ["O(1) (9x9)", "Simple"],
    cons: ["Only 9x9"],
    uses: ["Sudoku validation"],
    avoid: "When not needed",
    time: "O(1)",
    space: "O(1)",
    desc: "Validates a completed Sudoku matrix."
  },

  // ─── QUEUE ────────────────────────────────────────────────────────────────
  'Queue:max_sliding_window': {
    eli5: "Same as sliding_window_max in heap. Use deque to get max in each window.",
    pros: ["O(n)", "Efficient"],
    cons: ["Deque management"],
    uses: ["Streaming data", "Window analysis"],
    avoid: "When k is small",
    time: "O(n)",
    space: "O(k)",
    desc: "Finds maximum in each sliding window of size k using a deque."
  },
  'Queue:moving_average': {
    eli5: "Compute average of last k numbers in a stream. Use a queue to track window sum.",
    pros: ["O(1) per element", "Simple"],
    cons: ["Only average"],
    uses: ["Streaming statistics", "Signal smoothing"],
    avoid: "When you need more stats",
    time: "O(1) per operation",
    space: "O(k)",
    desc: "Maintains moving average of last k elements using a queue."
  },
  'Queue:reconstruct_queue': {
    eli5: "Reconstruct a queue given people's heights and number of taller people in front. Sort tall first, then insert at index.",
    pros: ["O(n²) naive, O(n log n) with Fenwick", "Greedy"],
    cons: ["Sorting and insertion"],
    uses: ["Queue reconstruction", "Interview"],
    avoid: "Large n",
    time: "O(n²) or O(n log n)",
    space: "O(n)",
    desc: "Reconstructs a queue from (height, number of taller people in front) pairs."
  },
  'Queue:zigzagiterator': {
    eli5: "Iterate over several lists in a zigzag pattern: take first element of first list, then first of second, etc., then second of first, etc.",
    pros: ["O(1) next", "Uses queue of iterators"],
    cons: ["Implement iterators"],
    uses: ["Interleaving lists", "Iterator design"],
    avoid: "When lists are huge",
    time: "O(1) next",
    space: "O(k)",
    desc: "Zigzag iterator that alternates between multiple lists."
  }
};