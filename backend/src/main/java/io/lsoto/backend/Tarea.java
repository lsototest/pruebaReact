package io.lsoto.backend;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tarea {
    @Id
    @GeneratedValue
    private int id;
    private String Descripcion;
    private String Fechacreacion;
    private String Vigente;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public String getFechacreacion() {
        return Fechacreacion;
    }

    public void setFechacreacion(String fechacreacion) {
        Fechacreacion = fechacreacion;
    }

    public String getVigente() {
        return Vigente;
    }

    public void setVigente(String vigente) {
        Vigente = vigente;
    }


  
    
}