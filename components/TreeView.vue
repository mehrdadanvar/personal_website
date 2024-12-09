<template>
  <div class="tree-node" :class="nodeClass">
    <!-- Node content -->
    <div class="node-content" @click="toggleExpand">
      <span class="node-text">{{ node.text }}</span>

      <!-- Expand/Collapse icon if has children -->
      <span v-if="node.children && node.children.length" class="expand-icon">
        {{ isExpanded ? "▼" : "▶" }}
      </span>
    </div>

    <!-- Recursive children rendering -->
    <div v-if="isExpanded && node.children && node.children.length" class="node-children">
      <RecursiveTreeNode v-for="childNode in node.children" :key="childNode.id" :node="childNode" :depth="depth + 1" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Define props
const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  depth: {
    type: Number,
    default: 0,
  },
});

// State for expanding/collapsing
const isExpanded = ref(false);

// Toggle expand/collapse
const toggleExpand = () => {
  if (props.node.children && props.node.children.length) {
    isExpanded.value = !isExpanded.value;
  }
};

// Compute node classes based on type and depth
const nodeClass = computed(() => ({
  "tree-node-root": props.depth === 0,
  [`type-${props.node.type}`]: true,
  "has-children": props.node.children && props.node.children.length > 0,
  "is-expanded": isExpanded.value,
  "is-end": props.node.end,
}));
</script>

<style scoped>
.tree-node {
  margin-left: 20px;
  padding: 5px;
  border-left: 1px solid #e0e0e0;
}

.node-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.2s;
}

.node-content:hover {
  background-color: #f0f0f0;
}

.expand-icon {
  font-size: 0.8em;
  color: #666;
}

.node-children {
  margin-top: 5px;
}

/* Type-specific styling */
.type-diagnosis {
  color: green;
}

.type-treatment {
  color: blue;
}

.type-lab-result {
  color: purple;
}

.type-lab {
  color: orange;
}

.is-end {
  font-style: italic;
}
</style>
