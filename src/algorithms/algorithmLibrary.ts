type LanguageCode = {
  javascript: string;
  python: string;
  java: string;
  cpp: string;
};

export const ALGO_PRESETS: Record<string, { code: LanguageCode; mode: 'array' | 'graph' }> = {

'Bubble Sort': {
  mode: 'array',
  code: {
    javascript: `// Repeatedly swap telling adjacent elements
const n = input.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`,
    python: `# Repeatedly swap adjacent elements
n = len(input)

for i in range(n):
    for j in range(n - i - 1):
        compare(j, j + 1)
        if input[j] > input[j + 1]:
            swap(j, j + 1)`,
    java: `// Repeatedly swap adjacent elements
int n = input.length;

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`,
    cpp: `// Repeatedly swap adjacent elements
int n = input.size();

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n - i - 1; j++) {
    compare(j, j + 1);
    if (input[j] > input[j + 1]) {
      swap(j, j + 1);
    }
  }
}`
  }
},

'Selection Sort': {
  mode: 'array',
  code: {
    javascript: `// Select minimum from unsorted part and swap to front
const n = input.length;

for (let i = 0; i < n; i++) {
  let minIdx = i;

  for (let j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx !== i) swap(i, minIdx);
}`,
    python: `# Select minimum from unsorted part and swap to front
n = len(input)

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        compare(min_idx, j)
        if input[j] < input[min_idx]:
            min_idx = j
    if min_idx != i:
        swap(i, min_idx)`,
    java: `// Select minimum from unsorted part and swap to front
int n = input.length;

for (int i = 0; i < n; i++) {
  int minIdx = i;

  for (int j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx != i) swap(i, minIdx);
}`,
    cpp: `// Select minimum from unsorted part and swap to front
int n = input.size();

for (int i = 0; i < n; i++) {
  int minIdx = i;

  for (int j = i + 1; j < n; j++) {
    compare(minIdx, j);
    if (input[j] < input[minIdx]) minIdx = j;
  }

  if (minIdx != i) swap(i, minIdx);
}`
  }
},

'Insertion Sort': {
  mode: 'array',
  code: {
    javascript: `// Insert each element into its correct position in sorted prefix
const n = input.length;

for (let i = 1; i < n; i++) {
  let j = i;

  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`,
    python: `# Insert each element into its correct position in sorted prefix
n = len(input)

for i in range(1, n):
    j = i
    while j > 0:
        compare(j - 1, j)
        if input[j - 1] > input[j]:
            swap(j - 1, j)
            j -= 1
        else:
            break`,
    java: `// Insert each element into its correct position in sorted prefix
int n = input.length;

for (int i = 1; i < n; i++) {
  int j = i;
  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`,
    cpp: `// Insert each element into its correct position in sorted prefix
int n = input.size();

for (int i = 1; i < n; i++) {
  int j = i;
  while (j > 0) {
    compare(j - 1, j);
    if (input[j - 1] > input[j]) {
      swap(j - 1, j);
      j--;
    } else break;
  }
}`
  }
},

'Shell Sort': {
  mode: 'array',
  code: {
    javascript: `// Insertion sort with decreasing gaps
const n = input.length;

for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
  for (let i = gap; i < n; i++) {
    let j = i;

    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`,
    python: `# Insertion sort with decreasing gaps
n = len(input)
gap = n // 2

while gap > 0:
    for i in range(gap, n):
        j = i
        while j >= gap:
            compare(j - gap, j)
            if input[j - gap] > input[j]:
                swap(j - gap, j)
                j -= gap
            else:
                break
    gap //= 2`,
    java: `// Insertion sort with decreasing gaps
int n = input.length;

for (int gap = n / 2; gap > 0; gap /= 2) {
  for (int i = gap; i < n; i++) {
    int j = i;
    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`,
    cpp: `// Insertion sort with decreasing gaps
int n = input.size();

for (int gap = n / 2; gap > 0; gap /= 2) {
  for (int i = gap; i < n; i++) {
    int j = i;
    while (j >= gap) {
      compare(j - gap, j);
      if (input[j - gap] > input[j]) {
        swap(j - gap, j);
        j -= gap;
      } else break;
    }
  }
}`
  }
},

'Quick Sort': {
  mode: 'array',
  code: {
    javascript: `// Divide array using pivot and sort partitions
function quickSort(l, r) {
  if (l >= r) return;

  let i = l, j = r;
  const pivotIndex = Math.floor((l + r) / 2);
  const pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
}

quickSort(0, input.length - 1);`,
    python: `# Divide array using pivot and sort partitions
def quick_sort(l, r):
    if l >= r:
        return

    i, j = l, r
    pivot_index = (l + r) // 2
    pivot = input[pivot_index]

    while i <= j:
        while input[i] < pivot:
            compare(i, pivot_index); i += 1
        while input[j] > pivot:
            compare(j, pivot_index); j -= 1
        if i <= j:
            swap(i, j)
            i += 1; j -= 1

    quick_sort(l, j)
    quick_sort(i, r)

quick_sort(0, len(input) - 1)`,
    java: `// Divide array using pivot and sort partitions
void quickSort(int l, int r) {
  if (l >= r) return;

  int i = l, j = r;
  int pivotIndex = (l + r) / 2;
  int pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
}

quickSort(0, input.length - 1);`,
    cpp: `// Divide array using pivot and sort partitions
function<void(int,int)> quickSort = [&](int l, int r) {
  if (l >= r) return;

  int i = l, j = r;
  int pivotIndex = (l + r) / 2;
  int pivot = input[pivotIndex];

  while (i <= j) {
    while (input[i] < pivot) { compare(i, pivotIndex); i++; }
    while (input[j] > pivot) { compare(j, pivotIndex); j--; }
    if (i <= j) {
      swap(i, j);
      i++; j--;
    }
  }

  quickSort(l, j);
  quickSort(i, r);
};

quickSort(0, input.size() - 1);`
  }
},

'Merge Sort': {
  mode: 'array',
  code: {
    javascript: `// Recursively divide and merge sorted halves
function mergeSort(l, r) {
  if (l >= r) return;

  const m = Math.floor((l + r) / 2);
  mergeSort(l, m);
  mergeSort(m + 1, r);

  let i = l, j = m + 1;
  const temp = [];

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp.push(input[i++]);
    else temp.push(input[j++]);
  }

  while (i <= m) temp.push(input[i++]);
  while (j <= r) temp.push(input[j++]);

  for (let k = 0; k < temp.length; k++) input[l + k] = temp[k];
}

mergeSort(0, input.length - 1);`,
    python: `# Recursively divide and merge sorted halves
def merge_sort(l, r):
    if l >= r:
        return

    m = (l + r) // 2
    merge_sort(l, m)
    merge_sort(m + 1, r)

    i, j = l, m + 1
    temp = []

    while i <= m and j <= r:
        compare(i, j)
        if input[i] <= input[j]:
            temp.append(input[i]); i += 1
        else:
            temp.append(input[j]); j += 1

    while i <= m:
        temp.append(input[i]); i += 1
    while j <= r:
        temp.append(input[j]); j += 1

    for k in range(len(temp)):
        input[l + k] = temp[k]

merge_sort(0, len(input) - 1)`,
    java: `// Recursively divide and merge sorted halves
void mergeSort(int l, int r) {
  if (l >= r) return;

  int m = (l + r) / 2;
  mergeSort(l, m);
  mergeSort(m + 1, r);

  int i = l, j = m + 1, k = 0;
  int[] temp = new int[r - l + 1];

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp[k++] = input[i++];
    else temp[k++] = input[j++];
  }

  while (i <= m) temp[k++] = input[i++];
  while (j <= r) temp[k++] = input[j++];

  for (int t = 0; t < temp.length; t++) input[l + t] = temp[t];
}

mergeSort(0, input.length - 1);`,
    cpp: `// Recursively divide and merge sorted halves
function<void(int,int)> mergeSort = [&](int l, int r) {
  if (l >= r) return;

  int m = (l + r) / 2;
  mergeSort(l, m);
  mergeSort(m + 1, r);

  int i = l, j = m + 1;
  vector<int> temp;

  while (i <= m && j <= r) {
    compare(i, j);
    if (input[i] <= input[j]) temp.push_back(input[i++]);
    else temp.push_back(input[j++]);
  }

  while (i <= m) temp.push_back(input[i++]);
  while (j <= r) temp.push_back(input[j++]);

  for (int t = 0; t < temp.size(); t++) input[l + t] = temp[t];
};

mergeSort(0, input.size() - 1);`
  }
},

'Counting Sort': {
  mode: 'array',
  code: {
    javascript: `// Count frequency of each value and rebuild array
let maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i); // Track progress
  if (input[i] > maxVal) maxVal = input[i];
}

const count = Array(maxVal + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  compare(i, i); // Track counting
  count[input[i]]++;
}

let idx = 0;
for (let v = 0; v < count.length; v++) {
  while (count[v]-- > 0) {
    compare(idx, idx); // Track rebuilding
    input[idx++] = v;
  }
}`,
    python: `# Count frequency of each value and rebuild array
max_val = max(input)
count = [0] * (max_val + 1)

for x in input:
    count[x] += 1

idx = 0
for v in range(len(count)):
    while count[v] > 0:
        input[idx] = v
        idx += 1
        count[v] -= 1`,
    java: `// Count frequency of each value and rebuild array
int maxVal = 0;
for (int x : input) maxVal = Math.max(maxVal, x);

int[] count = new int[maxVal + 1];
for (int x : input) count[x]++;

int idx = 0;
for (int v = 0; v < count.length; v++) {
  while (count[v]-- > 0) {
    input[idx++] = v;
  }
}`,
    cpp: `// Count frequency of each value and rebuild array
int maxVal = *max_element(input.begin(), input.end());
vector<int> count(maxVal + 1, 0);

for (int x : input) count[x]++;

int idx = 0;
for (int v = 0; v < count.size(); v++) {
  while (count[v]-- > 0) {
    input[idx++] = v;
  }
}`
  }
},

'Radix Sort': {
  mode: 'array',
  code: {
    javascript: `// LSD Radix sort using counting sort per digit
let maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i); // Track finding max
  if (input[i] > maxVal) maxVal = input[i];
}

for (let exp = 1; Math.floor(maxVal / exp) > 0; exp *= 10) {
  const output = Array(input.length).fill(0);
  const count = Array(10).fill(0);

  for (let i = 0; i < input.length; i++) {
    compare(i, i); // Track counting
    count[Math.floor(input[i] / exp) % 10]++;
  }
  
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];

  for (let i = input.length - 1; i >= 0; i--) {
    const d = Math.floor(input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  for (let i = 0; i < input.length; i++) {
    compare(i, i); // Track copying back
    input[i] = output[i];
  }
}`,
    python: `# LSD Radix sort using counting sort per digit
max_val = max(input)
exp = 1

while max_val // exp > 0:
    output = [0] * len(input)
    count = [0] * 10

    for x in input:
        count[(x // exp) % 10] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(len(input) - 1, -1, -1):
        d = (input[i] // exp) % 10
        count[d] -= 1
        output[count[d]] = input[i]

    input[:] = output
    exp *= 10`,
    java: `// LSD Radix sort using counting sort per digit
int maxVal = 0;
for (int x : input) maxVal = Math.max(maxVal, x);

for (int exp = 1; maxVal / exp > 0; exp *= 10) {
  int[] output = new int[input.length];
  int[] count = new int[10];

  for (int x : input) count[(x / exp) % 10]++;
  for (int i = 1; i < 10; i++) count[i] += count[i - 1];

  for (int i = input.length - 1; i >= 0; i--) {
    int d = (input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  System.arraycopy(output, 0, input, 0, input.length);
}`,
    cpp: `// LSD Radix sort using counting sort per digit
int maxVal = *max_element(input.begin(), input.end());

for (int exp = 1; maxVal / exp > 0; exp *= 10) {
  vector<int> output(input.size());
  int count[10] = {0};

  for (int x : input) count[(x / exp) % 10]++;
  for (int i = 1; i < 10; i++) count[i] += count[i - 1];

  for (int i = input.size() - 1; i >= 0; i--) {
    int d = (input[i] / exp) % 10;
    output[--count[d]] = input[i];
  }

  input = output;
}`
  }
},

'Bucket Sort': {
  mode: 'array',
  code: {
    javascript: `// Distribute into buckets, sort each, then merge
const n = input.length;

// Find min and max for normalization
let minVal = input[0], maxVal = input[0];
for (let i = 1; i < input.length; i++) {
  compare(0, i);
  if (input[i] < minVal) minVal = input[i];
  if (input[i] > maxVal) maxVal = input[i];
}

const range = maxVal - minVal || 1;
const buckets = Array.from({ length: n }, () => []);

for (let i = 0; i < input.length; i++) {
  compare(i, i); // Track distribution
  const normalized = (input[i] - minVal) / range;
  const idx = Math.min(Math.floor(n * normalized), n - 1);
  buckets[idx].push(input[i]);
}

for (let i = 0; i < buckets.length; i++) {
  buckets[i].sort((a, b) => a - b);
}

let k = 0;
for (let i = 0; i < buckets.length; i++) {
  for (let j = 0; j < buckets[i].length; j++) {
    compare(k, k); // Track merging
    input[k++] = buckets[i][j];
  }
}`,
    python: `# Distribute into buckets, sort each, then merge (for [0,1) floats)
n = len(input)
buckets = [[] for _ in range(n)]

for x in input:
    idx = int(n * x)
    buckets[idx].append(x)

for b in buckets:
    b.sort()

k = 0
for b in buckets:
    for x in b:
        input[k] = x
        k += 1`,
    java: `// Distribute into buckets, sort each, then merge (for [0,1) floats)
int n = input.length;
ArrayList<Double>[] buckets = new ArrayList[n];

for (int i = 0; i < n; i++) buckets[i] = new ArrayList<>();

for (double x : input) {
  int idx = (int)(n * x);
  buckets[idx].add(x);
}

for (int i = 0; i < n; i++) Collections.sort(buckets[i]);

int k = 0;
for (int i = 0; i < n; i++) {
  for (double x : buckets[i]) input[k++] = x;
}`,
    cpp: `// Distribute into buckets, sort each, then merge (for [0,1) floats)
int n = input.size();
vector<vector<double>> buckets(n);

for (double x : input) {
  int idx = int(n * x);
  buckets[idx].push_back(x);
}

for (auto &b : buckets) sort(b.begin(), b.end());

int k = 0;
for (auto &b : buckets) {
  for (double x : b) input[k++] = x;
}`
  }
},

'Binary Insertion Sort': {
  mode: 'array',
  code: {
    javascript: `// Use binary search to find insertion position
function findPos(x, l, r) {
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
}

for (let i = 1; i < input.length; i++) {
  const x = input[i];
  const pos = findPos(x, 0, i);
  let j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`,
    python: `# Use binary search to find insertion position
def find_pos(x, l, r):
    while l < r:
        m = (l + r) // 2
        compare(m, m)
        if input[m] <= x:
            l = m + 1
        else:
            r = m
    return l

for i in range(1, len(input)):
    x = input[i]
    pos = find_pos(x, 0, i)
    j = i

    while j > pos:
        input[j] = input[j - 1]
        j -= 1
    input[pos] = x`,
    java: `// Use binary search to find insertion position
int findPos(int x, int l, int r) {
  while (l < r) {
    int m = (l + r) / 2;
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
}

for (int i = 1; i < input.length; i++) {
  int x = input[i];
  int pos = findPos(x, 0, i);
  int j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`,
    cpp: `// Use binary search to find insertion position
auto findPos = [&](int x, int l, int r) {
  while (l < r) {
    int m = (l + r) / 2;
    compare(m, m);
    if (input[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
};

for (int i = 1; i < input.size(); i++) {
  int x = input[i];
  int pos = findPos(x, 0, i);
  int j = i;

  while (j > pos) {
    input[j] = input[j - 1];
    j--;
  }
  input[pos] = x;
}`
  }
},

'Tim Sort': {
  mode: 'array',
  code: {
    javascript: `// Tim Sort implementation (simplified)

const RUN = 32;
const n = input.length;

// Insertion sort for small runs
function insertionSort(left, right) {
  for (let i = left + 1; i <= right; i++) {
    let j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
}

// Merge two sorted subarrays
function merge(l, m, r) {
  const left = input.slice(l, m + 1);
  const right = input.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;

  while (i < left.length && j < right.length) {
    compare(l + i, m + 1 + j);
    if (left[i] <= right[j]) input[k++] = left[i++];
    else input[k++] = right[j++];
  }

  while (i < left.length) input[k++] = left[i++];
  while (j < right.length) input[k++] = right[j++];
}

// Sort small runs using insertion sort
for (let i = 0; i < n; i += RUN) {
  insertionSort(i, Math.min(i + RUN - 1, n - 1));
}

// Merge runs
for (let size = RUN; size < n; size *= 2) {
  for (let left = 0; left < n; left += 2 * size) {
    const mid = left + size - 1;
    const right = Math.min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`,

    python: `# Tim Sort implementation (simplified)

RUN = 32
n = len(input)

def insertion_sort(left, right):
    for i in range(left + 1, right + 1):
        j = i
        while j > left:
            compare(j - 1, j)
            if input[j - 1] > input[j]:
                swap(j - 1, j)
                j -= 1
            else:
                break

def merge(l, m, r):
    left = input[l:m+1]
    right = input[m+1:r+1]

    i = j = 0
    k = l

    while i < len(left) and j < len(right):
        compare(l + i, m + 1 + j)
        if left[i] <= right[j]:
            input[k] = left[i]; i += 1
        else:
            input[k] = right[j]; j += 1
        k += 1

    while i < len(left):
        input[k] = left[i]; i += 1; k += 1
    while j < len(right):
        input[k] = right[j]; j += 1; k += 1

for i in range(0, n, RUN):
    insertion_sort(i, min(i + RUN - 1, n - 1))

size = RUN
while size < n:
    for left in range(0, n, 2 * size):
        mid = left + size - 1
        right = min(left + 2 * size - 1, n - 1)
        if mid < right:
            merge(left, mid, right)
    size *= 2`,

    java: `// Tim Sort implementation (simplified)

int RUN = 32;
int n = input.length;

void insertionSort(int left, int right) {
  for (int i = left + 1; i <= right; i++) {
    int j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
}

void merge(int l, int m, int r) {
  int n1 = m - l + 1;
  int n2 = r - m;

  int[] L = new int[n1];
  int[] R = new int[n2];

  for (int i = 0; i < n1; i++) L[i] = input[l + i];
  for (int j = 0; j < n2; j++) R[j] = input[m + 1 + j];

  int i = 0, j = 0, k = l;

  while (i < n1 && j < n2) {
    compare(l + i, m + 1 + j);
    if (L[i] <= R[j]) input[k++] = L[i++];
    else input[k++] = R[j++];
  }

  while (i < n1) input[k++] = L[i++];
  while (j < n2) input[k++] = R[j++];
}

for (int i = 0; i < n; i += RUN)
  insertionSort(i, Math.min(i + RUN - 1, n - 1));

for (int size = RUN; size < n; size *= 2) {
  for (int left = 0; left < n; left += 2 * size) {
    int mid = left + size - 1;
    int right = Math.min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`,

    cpp: `// Tim Sort implementation (simplified)

int RUN = 32;
int n = input.size();

auto insertionSort = [&](int left, int right) {
  for (int i = left + 1; i <= right; i++) {
    int j = i;
    while (j > left) {
      compare(j - 1, j);
      if (input[j - 1] > input[j]) {
        swap(j - 1, j);
        j--;
      } else break;
    }
  }
};

auto merge = [&](int l, int m, int r) {
  vector<int> L(input.begin() + l, input.begin() + m + 1);
  vector<int> R(input.begin() + m + 1, input.begin() + r + 1);

  int i = 0, j = 0, k = l;

  while (i < L.size() && j < R.size()) {
    compare(l + i, m + 1 + j);
    if (L[i] <= R[j]) input[k++] = L[i++];
    else input[k++] = R[j++];
  }

  while (i < L.size()) input[k++] = L[i++];
  while (j < R.size()) input[k++] = R[j++];
};

for (int i = 0; i < n; i += RUN)
  insertionSort(i, min(i + RUN - 1, n - 1));

for (int size = RUN; size < n; size *= 2) {
  for (int left = 0; left < n; left += 2 * size) {
    int mid = left + size - 1;
    int right = min(left + 2 * size - 1, n - 1);
    if (mid < right) merge(left, mid, right);
  }
}`
  }
},

'Heap Sort': {
  mode: 'graph',
  code: {
    javascript: `// Build max heap and extract elements
// Graph Visualization Setup
function getPos(i) {
  const d = Math.floor(Math.log2(i+1));
  const off = i - (Math.pow(2, d) - 1);
  const x = 800 * (2*off + 1) / Math.pow(2, d+1);
  const y = 50 + d*60;
  return {x, y};
}

function updateNode(i) {
  const pos = getPos(i);
  addNode(i, input[i], pos.x, pos.y);
}

// Initialize Graph
for (let i = 0; i < input.length; i++) {
  updateNode(i);
  if (i > 0) addEdge(Math.floor((i-1)/2), i);
}

function visualSwap(i, j) {
  swap(i, j); // Array swap
  // Update graph values
  updateNode(i);
  updateNode(j);
  highlightNode(i); highlightNode(j);
}

const n = input.length;

function heapify(i, size) {
  while (true) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest === i) break;
    visualSwap(i, largest);
    i = largest;
  }
}

for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);

for (let i = n - 1; i > 0; i--) {
  visualSwap(0, i);
  // Mark as sorted?
  highlightNode(i); 
  heapify(0, i);
}`,
    python: `# Build max heap and extract elements
n = len(input)

def heapify(i, size):
    while True:
        largest = i
        l = 2*i + 1
        r = 2*i + 2

        if l < size:
            compare(l, largest)
            if input[l] > input[largest]:
                largest = l
        if r < size:
            compare(r, largest)
            if input[r] > input[largest]:
                largest = r

        if largest == i:
            break
        swap(i, largest)
        i = largest

for i in range(n//2 - 1, -1, -1):
    heapify(i, n)

for i in range(n - 1, 0, -1):
    swap(0, i)
    heapify(0, i)`,
    java: `// Build max heap and extract elements
int n = input.length;

void heapify(int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
}

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`,
    cpp: `// Build max heap and extract elements
int n = input.size();

function<void(int,int)> heapify = [&](int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
};

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`
  }
},

'Tree Sort (BST Inorder)': {
  mode: 'graph',
  code: {
    javascript: `// Insert into BST, then inorder traversal
let idCounter = 0;

class Node {
  constructor(v) { 
    this.id = 'n' + idCounter++;
    this.v = v; 
    this.l = null; 
    this.r = null;
    addNode(this.id, v); 
  }
}

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function insert(t, v) {
  if (!t) return new Node(v);
  highlightNode(t.id);
  compare(v, t.v);
  if (v < t.v) setLeft(t, insert(t.l, v));
  else setRight(t, insert(t.r, v));
  return t;
}

function inorder(t, out) {
  if (!t) return;
  inorder(t.l, out);
  if (t) highlightNode(t.id);
  out.push(t.v);
  inorder(t.r, out);
}

let root = null;
for (let i = 0; i < input.length; i++) {
  root = insert(root, input[i]);
}

const out = [];
inorder(root, out);
for (let i = 0; i < input.length; i++) input[i] = out[i];`,
    python: `# Insert into BST, then inorder traversal
class Node:
    def __init__(self, v):
        self.v = v
        self.l = None
        self.r = None

def insert(t, v):
    if not t:
        return Node(v)
    compare(v, t.v)
    if v < t.v:
        t.l = insert(t.l, v)
    else:
        t.r = insert(t.r, v)
    return t

def inorder(t, out):
    if not t:
        return
    inorder(t.l, out)
    out.append(t.v)
    inorder(t.r, out)

root = None
for x in input:
    root = insert(root, x)

out = []
inorder(root, out)
input[:] = out`,
    java: `// Insert into BST, then inorder traversal
class Node {
  int v; Node l, r;
  Node(int v) { this.v = v; }
}

Node insert(Node t, int v) {
  if (t == null) return new Node(v);
  compare(v, t.v);
  if (v < t.v) t.l = insert(t.l, v);
  else t.r = insert(t.r, v);
  return t;
}

void inorder(Node t, List<Integer> out) {
  if (t == null) return;
  inorder(t.l, out);
  out.add(t.v);
  inorder(t.r, out);
}

Node root = null;
for (int x : input) root = insert(root, x);

ArrayList<Integer> out = new ArrayList<>();
inorder(root, out);
for (int i = 0; i < input.length; i++) input[i] = out.get(i);`,
    cpp: `// Insert into BST, then inorder traversal
struct Node {
  int v; Node *l, *r;
  Node(int v) : v(v), l(nullptr), r(nullptr) {}
};

function<Node*(Node*,int)> insert = [&](Node* t, int v) -> Node* {
  if (!t) return new Node(v);
  compare(v, t->v);
  if (v < t->v) t->l = insert(t->l, v);
  else t->r = insert(t->r, v);
  return t;
};

function<void(Node*, vector<int>&)> inorder = [&](Node* t, vector<int>& out) {
  if (!t) return;
  inorder(t->l, out);
  out.push_back(t->v);
  inorder(t->r, out);
};

Node* root = nullptr;
for (int x : input) root = insert(root, x);

vector<int> out;
inorder(root, out);
for (int i = 0; i < input.size(); i++) input[i] = out[i];`
  }
},
'AVL Tree Sort': {
  mode: 'graph',
  code: {
    javascript: `// AVL Tree Sort using balanced BST
let idCounter = 0;

class Node {
  constructor(v) {
    this.id = 'n' + idCounter++;
    this.v = v;
    this.h = 1;
    this.l = null;
    this.r = null;
    addNode(this.id, v);
  }
}

function height(n) { return n ? n.h : 0; }

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateRight(y) {
  const x = y.l;
  const T2 = x.r;
  setLeft(y, T2);
  setRight(x, y);
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  return x;
}

function rotateLeft(x) {
  const y = x.r;
  const T2 = y.l;
  setRight(x, T2);
  setLeft(y, x);
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  return y;
}

function balance(n) { return height(n.l) - height(n.r); }

function insert(n, v) {
  if (!n) return new Node(v);

  highlightNode(n.id);
  compare(v, n.v);
  if (v < n.v) setLeft(n, insert(n.l, v));
  else setRight(n, insert(n.r, v));

  n.h = 1 + Math.max(height(n.l), height(n.r));
  const b = balance(n);

  if (b > 1 && v < n.l.v) return rotateRight(n);
  if (b < -1 && v > n.r.v) return rotateLeft(n);
  if (b > 1 && v > n.l.v) { 
      setLeft(n, rotateLeft(n.l)); 
      return rotateRight(n); 
  }
  if (b < -1 && v < n.r.v) { 
      setRight(n, rotateRight(n.r)); 
      return rotateLeft(n); 
  }

  return n;
}

function inorder(n, out) {
  if (!n) return;
  inorder(n.l, out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r, out);
}

let root = null;
for (let i = 0; i < input.length; i++) root = insert(root, input[i]);
const out = [];
inorder(root, out);
for (let i = 0; i < input.length; i++) input[i] = out[i];`,

    python: `# AVL Tree Sort using balanced BST

class Node:
    def __init__(self, v):
        self.v = v
        self.h = 1
        self.l = None
        self.r = None

def height(n):
    return n.h if n else 0

def rotate_right(y):
    x = y.l
    T2 = x.r
    x.r = y
    y.l = T2
    y.h = max(height(y.l), height(y.r)) + 1
    x.h = max(height(x.l), height(x.r)) + 1
    return x

def rotate_left(x):
    y = x.r
    T2 = y.l
    y.l = x
    x.r = T2
    x.h = max(height(x.l), height(x.r)) + 1
    y.h = max(height(y.l), height(y.r)) + 1
    return y

def balance(n):
    return height(n.l) - height(n.r)

def insert(n, v):
    if not n:
        return Node(v)

    compare(v, n.v)
    if v < n.v:
        n.l = insert(n.l, v)
    else:
        n.r = insert(n.r, v)

    n.h = 1 + max(height(n.l), height(n.r))
    b = balance(n)

    if b > 1 and v < n.l.v:
        return rotate_right(n)
    if b < -1 and v > n.r.v:
        return rotate_left(n)
    if b > 1 and v > n.l.v:
        n.l = rotate_left(n.l)
        return rotate_right(n)
    if b < -1 and v < n.r.v:
        n.r = rotate_right(n.r)
        return rotate_left(n)

    return n

def inorder(n, out):
    if not n: return
    inorder(n.l, out)
    out.append(n.v)
    inorder(n.r, out)

root = None
for x in input:
    root = insert(root, x)

out = []
inorder(root, out)
input[:] = out`,

    java: `// AVL Tree Sort using balanced BST

class Node {
  int v, h;
  Node l, r;
  Node(int v) { this.v = v; this.h = 1; }
}

int height(Node n) { return n == null ? 0 : n.h; }

Node rotateRight(Node y) {
  Node x = y.l;
  Node T2 = x.r;
  x.r = y; y.l = T2;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  return x;
}

Node rotateLeft(Node x) {
  Node y = x.r;
  Node T2 = y.l;
  y.l = x; x.r = T2;
  x.h = Math.max(height(x.l), height(x.r)) + 1;
  y.h = Math.max(height(y.l), height(y.r)) + 1;
  return y;
}

int balance(Node n) { return height(n.l) - height(n.r); }

Node insert(Node n, int v) {
  if (n == null) return new Node(v);

  compare(v, n.v);
  if (v < n.v) n.l = insert(n.l, v);
  else n.r = insert(n.r, v);

  n.h = 1 + Math.max(height(n.l), height(n.r));
  int b = balance(n);

  if (b > 1 && v < n.l.v) return rotateRight(n);
  if (b < -1 && v > n.r.v) return rotateLeft(n);
  if (b > 1 && v > n.l.v) { n.l = rotateLeft(n.l); return rotateRight(n); }
  if (b < -1 && v < n.r.v) { n.r = rotateRight(n.r); return rotateLeft(n); }

  return n;
}

void inorder(Node n, List<Integer> out) {
  if (n == null) return;
  inorder(n.l, out); out.add(n.v); inorder(n.r, out);
}

Node root = null;
for (int x : input) root = insert(root, x);
ArrayList<Integer> out = new ArrayList<>();
inorder(root, out);
for (int i = 0; i < input.length; i++) input[i] = out.get(i);`,

    cpp: `// AVL Tree Sort using balanced BST

struct Node {
  int v, h;
  Node *l, *r;
  Node(int v): v(v), h(1), l(nullptr), r(nullptr) {}
};

int height(Node* n){ return n ? n->h : 0; }

Node* rotateRight(Node* y){
  Node* x = y->l;
  Node* T2 = x->r;
  x->r = y; y->l = T2;
  y->h = max(height(y->l), height(y->r)) + 1;
  x->h = max(height(x->l), height(x->r)) + 1;
  return x;
}

Node* rotateLeft(Node* x){
  Node* y = x->r;
  Node* T2 = y->l;
  y->l = x; x->r = T2;
  x->h = max(height(x->l), height(x->r)) + 1;
  y->h = max(height(y->l), height(y->r)) + 1;
  return y;
}

int balance(Node* n){ return height(n->l) - height(n->r); }

function<Node*(Node*,int)> insert = [&](Node* n, int v){
  if(!n) return new Node(v);
  compare(v, n->v);
  if(v < n->v) n->l = insert(n->l, v);
  else n->r = insert(n->r, v);

  n->h = 1 + max(height(n->l), height(n->r));
  int b = balance(n);

  if(b > 1 && v < n->l->v) return rotateRight(n);
  if(b < -1 && v > n->r->v) return rotateLeft(n);
  if(b > 1 && v > n->l->v){ n->l = rotateLeft(n->l); return rotateRight(n); }
  if(b < -1 && v < n->r->v){ n->r = rotateRight(n->r); return rotateLeft(n); }

  return n;
};

function<void(Node*,vector<int>&)> inorder = [&](Node* n, vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`
  }
},


'Red-Black Tree Sort': {
  mode: 'graph',
  code: {
    javascript: `// Red-Black Tree Sort (simplified insert + inorder)
let idCounter = 0;

class Node {
  constructor(v, red = true) {
    this.id = 'n' + idCounter++;
    this.v = v; 
    this.red = red;
    this.l = null; 
    this.r = null;
    addNode(this.id, v, undefined, undefined, red ? 'red' : 'black');
  }
}

function updateColor(n) {
  if (n) addNode(n.id, n.v, undefined, undefined, n.red ? 'red' : 'black');
}

function isRed(n){ return n && n.red; }

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateLeft(h){
  const x = h.r;
  setRight(h, x.l);
  setLeft(x, h);
  x.red = h.red; h.red = true;
  updateColor(x); updateColor(h);
  return x;
}

function rotateRight(h){
  const x = h.l;
  setLeft(h, x.r);
  setRight(x, h);
  x.red = h.red; h.red = true;
  updateColor(x); updateColor(h);
  return x;
}

function flip(h){
  h.red = true;
  h.l.red = false;
  h.r.red = false;
  updateColor(h); updateColor(h.l); updateColor(h.r);
}

function insert(h, v){
  if(!h) return new Node(v);
  highlightNode(h.id);

  compare(v, h.v);
  if(v < h.v) setLeft(h, insert(h.l, v));
  else setRight(h, insert(h.r, v));

  if(isRed(h.r) && !isRed(h.l)) h = rotateLeft(h);
  if(isRed(h.l) && isRed(h.l.l)) h = rotateRight(h);
  if(isRed(h.l) && isRed(h.r)) flip(h);

  return h;
}

function inorder(n, out){
  if(!n) return;
  inorder(n.l,out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r,out);
}

let root=null;
for(let i=0;i<input.length;i++) root=insert(root,input[i]);
root.red=false;
updateColor(root);

const out=[];
inorder(root,out);
for(let i=0;i<input.length;i++) input[i]=out[i];`,

    python: `# Red-Black Tree Sort (simplified insert + inorder)

class Node:
    def __init__(self, v, red=True):
        self.v=v; self.red=red; self.l=None; self.r=None

def is_red(n): return n and n.red

def rotate_left(h):
    x=h.r; h.r=x.l; x.l=h
    x.red=h.red; h.red=True
    return x

def rotate_right(h):
    x=h.l; h.l=x.r; x.r=h
    x.red=h.red; h.red=True
    return x

def flip(h):
    h.red=True; h.l.red=False; h.r.red=False

def insert(h,v):
    if not h: return Node(v)

    compare(v,h.v)
    if v<h.v: h.l=insert(h.l,v)
    else: h.r=insert(h.r,v)

    if is_red(h.r) and not is_red(h.l): h=rotate_left(h)
    if is_red(h.l) and is_red(h.l.l): h=rotate_right(h)
    if is_red(h.l) and is_red(h.r): flip(h)

    return h

def inorder(n,out):
    if not n: return
    inorder(n.l,out); out.append(n.v); inorder(n.r,out)

root=None
for x in input: root=insert(root,x)
root.red=False

out=[]; inorder(root,out); input[:]=out`,

    java: `// Red-Black Tree Sort (simplified LLRB)

class Node {
  int v; boolean red;
  Node l,r;
  Node(int v){this.v=v; this.red=true;}
}

boolean isRed(Node n){ return n!=null && n.red; }

Node rotateLeft(Node h){
  Node x=h.r; h.r=x.l; x.l=h;
  x.red=h.red; h.red=true;
  return x;
}

Node rotateRight(Node h){
  Node x=h.l; h.l=x.r; x.r=h;
  x.red=h.red; h.red=true;
  return x;
}

void flip(Node h){
  h.red=true; h.l.red=false; h.r.red=false;
}

Node insert(Node h,int v){
  if(h==null) return new Node(v);

  compare(v,h.v);
  if(v<h.v) h.l=insert(h.l,v);
  else h.r=insert(h.r,v);

  if(isRed(h.r) && !isRed(h.l)) h=rotateLeft(h);
  if(isRed(h.l) && isRed(h.l.l)) h=rotateRight(h);
  if(isRed(h.l) && isRed(h.r)) flip(h);

  return h;
}

void inorder(Node n,List<Integer> out){
  if(n==null) return;
  inorder(n.l,out); out.add(n.v); inorder(n.r,out);
}

Node root=null;
for(int x:input) root=insert(root,x);
root.red=false;

ArrayList<Integer> out=new ArrayList<>();
inorder(root,out);
for(int i=0;i<input.length;i++) input[i]=out.get(i);`,

    cpp: `// Red-Black Tree Sort (simplified LLRB)

struct Node{
  int v; bool red;
  Node *l,*r;
  Node(int v):v(v),red(true),l(nullptr),r(nullptr){}
};

bool isRed(Node* n){ return n && n->red; }

Node* rotateLeft(Node* h){
  Node* x=h->r; h->r=x->l; x->l=h;
  x->red=h->red; h->red=true;
  return x;
}

Node* rotateRight(Node* h){
  Node* x=h->l; h->l=x->r; x->r=h;
  x->red=h->red; h->red=true;
  return x;
}

void flip(Node* h){
  h->red=true; h->l->red=false; h->r->red=false;
}

function<Node*(Node*,int)> insert=[&](Node* h,int v){
  if(!h) return new Node(v);

  compare(v,h->v);
  if(v<h->v) h->l=insert(h->l,v);
  else h->r=insert(h->r,v);

  if(isRed(h->r) && !isRed(h->l)) h=rotateLeft(h);
  if(isRed(h->l) && isRed(h->l->l)) h=rotateRight(h);
  if(isRed(h->l) && isRed(h->r)) flip(h);

  return h;
};

function<void(Node*,vector<int>&)> inorder=[&](Node* n,vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
root->red=false;

vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`
  }
},


'Splay Tree Sort': {
  mode: 'graph',
  code: {
    javascript: `// Splay Tree Sort using splaying on insert
let idCounter = 0;

class Node {
  constructor(v){ 
    this.id = 'n' + idCounter++;
    this.v=v; 
    this.l=null; 
    this.r=null; 
    addNode(this.id, v);
  }
}

function setLeft(p, c) {
  if (p.l === c) return;
  if (p.l) removeEdge(p.id + '-' + p.l.id);
  p.l = c;
  if (c) addEdge(p.id, c.id);
}

function setRight(p, c) {
  if (p.r === c) return;
  if (p.r) removeEdge(p.id + '-' + p.r.id);
  p.r = c;
  if (c) addEdge(p.id, c.id);
}

function rotateRight(x){
  const y=x.l; 
  setLeft(x, y.r);
  setRight(y, x);
  return y;
}

function rotateLeft(x){
  const y=x.r; 
  setRight(x, y.l);
  setLeft(y, x);
  return y;
}

function splay(root,v){
  if(!root || root.v===v) return root;
  highlightNode(root.id);

  if(v < root.v){
    if(!root.l) return root;
    if(v < root.l.v){
      setLeft(root.l, splay(root.l.l,v));
      root = rotateRight(root);
    } else if(v > root.l.v){
      setRight(root.l, splay(root.l.r,v));
      if(root.l.r) setLeft(root, rotateLeft(root.l));
    }
    return root.l ? rotateRight(root) : root;
  } else {
    if(!root.r) return root;
    if(v > root.r.v){
      setRight(root.r, splay(root.r.r,v));
      root = rotateLeft(root);
    } else if(v < root.r.v){
      setLeft(root.r, splay(root.r.l,v));
      if(root.r.l) setRight(root, rotateRight(root.r));
    }
    return root.r ? rotateLeft(root) : root;
  }
}

function insert(root,v){
  if(!root) return new Node(v);
  root = splay(root,v);
  compare(v,root.v);
  if(v<root.v){
    const n=new Node(v);
    setRight(n, root);
    setLeft(n, root.l);
    setLeft(root, null);
    return n;
  }
  if(v>root.v){
    const n=new Node(v);
    setLeft(n, root);
    setRight(n, root.r);
    setRight(root, null);
    return n;
  }
  return root;
}

function inorder(n,out){
  if(!n) return;
  inorder(n.l,out); 
  if(n) highlightNode(n.id);
  out.push(n.v); 
  inorder(n.r,out);
}

let root=null;
for(let i=0;i<input.length;i++) root=insert(root,input[i]);
const out=[]; inorder(root,out);
for(let i=0;i<input.length;i++) input[i]=out[i];`,

    python: `# Splay Tree Sort using splaying on insert

class Node:
    def __init__(self,v):
        self.v=v; self.l=None; self.r=None

def rotate_right(x):
    y=x.l; x.l=y.r; y.r=x; return y

def rotate_left(x):
    y=x.r; x.r=y.l; y.l=x; return y

def splay(root,v):
    if not root or root.v==v: return root

    if v<root.v:
        if not root.l: return root
        if v<root.l.v:
            root.l.l=splay(root.l.l,v)
            root=rotate_right(root)
        elif v>root.l.v:
            root.l.r=splay(root.l.r,v)
            if root.l.r: root.l=rotate_left(root.l)
        return rotate_right(root) if root.l else root
    else:
        if not root.r: return root
        if v>root.r.v:
            root.r.r=splay(root.r.r,v)
            root=rotate_left(root)
        elif v<root.r.v:
            root.r.l=splay(root.r.l,v)
            if root.r.l: root.r=rotate_right(root.r)
        return rotate_left(root) if root.r else root

def insert(root,v):
    if not root: return Node(v)
    root=splay(root,v)
    compare(v,root.v)
    if v<root.v:
        n=Node(v); n.r=root; n.l=root.l; root.l=None; return n
    if v>root.v:
        n=Node(v); n.l=root; n.r=root.r; root.r=None; return n
    return root

def inorder(n,out):
    if not n: return
    inorder(n.l,out); out.append(n.v); inorder(n.r,out)

root=None
for x in input: root=insert(root,x)
out=[]; inorder(root,out); input[:]=out`,

    java: `// Splay Tree Sort using splaying on insert

class Node{
  int v; Node l,r;
  Node(int v){this.v=v;}
}

Node rotateRight(Node x){
  Node y=x.l; x.l=y.r; y.r=x; return y;
}

Node rotateLeft(Node x){
  Node y=x.r; x.r=y.l; y.l=x; return y;
}

Node splay(Node root,int v){
  if(root==null||root.v==v) return root;

  if(v<root.v){
    if(root.l==null) return root;
    if(v<root.l.v){
      root.l.l=splay(root.l.l,v);
      root=rotateRight(root);
    } else if(v>root.l.v){
      root.l.r=splay(root.l.r,v);
      if(root.l.r!=null) root.l=rotateLeft(root.l);
    }
    return root.l!=null?rotateRight(root):root;
  } else {
    if(root.r==null) return root;
    if(v>root.r.v){
      root.r.r=splay(root.r.r,v);
      root=rotateLeft(root);
    } else if(v<root.r.v){
      root.r.l=splay(root.r.l,v);
      if(root.r.l!=null) root.r=rotateRight(root.r);
    }
    return root.r!=null?rotateLeft(root):root;
  }
}

Node insert(Node root,int v){
  if(root==null) return new Node(v);
  root=splay(root,v);
  compare(v,root.v);
  if(v<root.v){
    Node n=new Node(v); n.r=root; n.l=root.l; root.l=null; return n;
  }
  if(v>root.v){
    Node n=new Node(v); n.l=root; n.r=root.r; root.r=null; return n;
  }
  return root;
}

void inorder(Node n,List<Integer> out){
  if(n==null) return;
  inorder(n.l,out); out.add(n.v); inorder(n.r,out);
}

Node root=null;
for(int x:input) root=insert(root,x);
ArrayList<Integer> out=new ArrayList<>();
inorder(root,out);
for(int i=0;i<input.length;i++) input[i]=out.get(i);`,

    cpp: `// Splay Tree Sort using splaying on insert

struct Node{
  int v; Node *l,*r;
  Node(int v):v(v),l(nullptr),r(nullptr){}
};

Node* rotateRight(Node* x){
  Node* y=x->l; x->l=y->r; y->r=x; return y;
}

Node* rotateLeft(Node* x){
  Node* y=x->r; x->r=y->l; y->l=x; return y;
}

Node* splay(Node* root,int v){
  if(!root||root->v==v) return root;

  if(v<root->v){
    if(!root->l) return root;
    if(v<root->l->v){
      root->l->l=splay(root->l->l,v);
      root=rotateRight(root);
    } else if(v>root->l->v){
      root->l->r=splay(root->l->r,v);
      if(root->l->r) root->l=rotateLeft(root->l);
    }
    return root->l?rotateRight(root):root;
  } else {
    if(!root->r) return root;
    if(v>root->r->v){
      root->r->r=splay(root->r->r,v);
      root=rotateLeft(root);
    } else if(v<root->r->v){
      root->r->l=splay(root->r->l,v);
      if(root->r->l) root->r=rotateRight(root->r);
    }
    return root->r?rotateLeft(root):root;
  }
}

Node* insert(Node* root,int v){
  if(!root) return new Node(v);
  root=splay(root,v);
  compare(v,root->v);
  if(v<root->v){
    Node* n=new Node(v); n->r=root; n->l=root->l; root->l=nullptr; return n;
  }
  if(v>root->v){
    Node* n=new Node(v); n->l=root; n->r=root->r; root->r=nullptr; return n;
  }
  return root;
}

function<void(Node*,vector<int>&)> inorder=[&](Node* n,vector<int>& out){
  if(!n) return;
  inorder(n->l,out); out.push_back(n->v); inorder(n->r,out);
};

Node* root=nullptr;
for(int x:input) root=insert(root,x);
vector<int> out; inorder(root,out);
for(int i=0;i<input.size();i++) input[i]=out[i];`
  }
},

'Bottom-Up Heap Sort': {
  mode: 'graph',
  code: {
    javascript: `// Iterative heapify for bottom-up heap construction
// Graph Visualization Setup
function getPos(i) {
  const d = Math.floor(Math.log2(i+1));
  const off = i - (Math.pow(2, d) - 1);
  const x = 800 * (2*off + 1) / Math.pow(2, d+1);
  const y = 50 + d*60;
  return {x, y};
}

function updateNode(i) {
  const pos = getPos(i);
  addNode(i, input[i], pos.x, pos.y);
}

// Initialize Graph
for (let i = 0; i < input.length; i++) {
  updateNode(i);
  if (i > 0) addEdge(Math.floor((i-1)/2), i);
}

function visualSwap(i, j) {
  swap(i, j); // Array swap
  // Update graph values
  updateNode(i);
  updateNode(j);
  highlightNode(i); highlightNode(j);
}

const n = input.length;

function heapify(i, size) {
  while (true) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest === i) break;
    visualSwap(i, largest);
    i = largest;
  }
}

for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);

for (let i = n - 1; i > 0; i--) {
  visualSwap(0, i);
  // Mark sort
  highlightNode(i);
  heapify(0, i);
}`,
    python: `# Iterative heapify for bottom-up heap construction
n = len(input)

def heapify(i, size):
    while True:
        largest = i
        l = 2*i + 1
        r = 2*i + 2

        if l < size:
            compare(l, largest)
            if input[l] > input[largest]:
                largest = l
        if r < size:
            compare(r, largest)
            if input[r] > input[largest]:
                largest = r

        if largest == i:
            break
        swap(i, largest)
        i = largest

for i in range(n//2 - 1, -1, -1):
    heapify(i, n)

for i in range(n - 1, 0, -1):
    swap(0, i)
    heapify(0, i)`,
    java: `// Iterative heapify for bottom-up heap construction
int n = input.length;

void heapify(int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
}

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`,
    cpp: `// Iterative heapify for bottom-up heap construction
int n = input.size();

function<void(int,int)> heapify = [&](int i, int size) {
  while (true) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if (l < size) {
      compare(l, largest);
      if (input[l] > input[largest]) largest = l;
    }
    if (r < size) {
      compare(r, largest);
      if (input[r] > input[largest]) largest = r;
    }

    if (largest == i) break;
    swap(i, largest);
    i = largest;
  }
};

for (int i = n/2 - 1; i >= 0; i--) heapify(i, n);

for (int i = n - 1; i > 0; i--) {
  swap(0, i);
  heapify(0, i);
}`
  }
}
};
