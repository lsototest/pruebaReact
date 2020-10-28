package io.lsoto.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api2")
@CrossOrigin
public class TareaController {
    @Autowired
    private TareaRepository tareaRepository;

    @GetMapping("/")
    public List<Tarea> GetTareas() {
        return tareaRepository.findAll();
    }
    @GetMapping("/{id}")
    public Tarea GetTarea(@PathVariable Integer id) {
        return tareaRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Tarea PostTarea(@RequestBody Tarea tarea) {
        return tareaRepository.save(tarea);
    }
    @PutMapping("/")
    public Tarea PutTarea(@RequestBody Tarea tarea) {
        Tarea oldTarea = tareaRepository.findById(tarea.getId()).orElse(null);
        oldTarea.setDescripcion(tarea.getDescripcion());
        oldTarea.setFechacreacion(tarea.getFechacreacion());
        oldTarea.setVigente(tarea.getVigente());
        return tareaRepository.save(oldTarea);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteTarea(@PathVariable Integer id) {
        tareaRepository.deleteById(id);
        return id;
    }
}