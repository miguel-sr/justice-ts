import { Alert } from "@/lib/alert";
import MemberService from "@/services/member.service";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MembersComponent",
  data() {
    return {
      members: null,
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    async getMembers() {
      try {
        this.members = await MemberService.get();
      } catch (error) {
        Alert.error("Erro ao carregar membros.");
      } finally {
        this.$emit("membersLoaded");
      }
    },
  },
});
