import { reactive } from "vue";
import type { IKhaosService } from "@Services/Khaos/KhaosService";

interface State {
  loading: boolean;
  error: string | null;
};

export function useKhaos() {
  const state = reactive<State>({
    loading: false, error: null,
  });

  const wrapper = async <Data>(service: IKhaosService) => {
    state.loading = true;
    state.error = null;

    const response = await service.invoke<Data>();
    
    if (response.error) {
      state.error = response.error.message;
    };

    state.loading = false;
    return response;
  };

  return { state, wrapper };
};