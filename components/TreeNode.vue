<template>
  <div :class="nodeClass" class="p-4 rounded-lg mb-2">
    <!-- Node Content -->
    <div class="font-semibold">{{ node.text }}</div>

    <!-- Recursively Render Children -->
    <div v-if="node.children && node.children.length" class="ml-6 mt-2">
      <TreeNode v-for="child in node.children" :key="child.id" :node="child" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Dynamically assign the Tailwind class based on node type
    nodeClass() {
      const typeColors = {
        lab: "bg-blue-500",
        "lab-result": "bg-green-500",
        treatment: "bg-purple-500",
        diagnosis: "bg-yellow-500",
        other: "bg-red-500",
      };
      return typeColors[this.node.type] || "bg-gray-500";
    },
  },
};
</script>
