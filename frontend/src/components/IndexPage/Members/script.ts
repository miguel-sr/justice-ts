import alertService from "@/services/alert.service";
import MemberService from "@/services/server/member.service";
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
        alertService.error("Erro ao carregar membros.");
      } finally {
        this.$emit("membersLoaded");
      }
    },
  },
});
